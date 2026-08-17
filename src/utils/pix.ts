/**
 * Gerador de Payload Pix no padrão oficial EMV / BR Code (Banco Central do Brasil)
 * Gera a string completa do Pix Copia e Cola com cálculo de checksum CRC16-CCITT.
 */

export interface PixConfig {
  pixKey: string;
  merchantName: string;
  merchantCity: string;
  amount?: number;
  description?: string;
  txId?: string;
}

/**
 * Formata um campo no formato TLV (Type-Length-Value) do padrão EMV.
 */
function formatTLV(id: string, value: string): string {
  const length = value.length.toString().padStart(2, '0');
  return `${id}${length}${value}`;
}

/**
 * Normaliza strings removendo caracteres especiais e acentos (especificação BACEN).
 */
function normalizeString(str: string, maxLength: number): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toUpperCase()
    .slice(0, maxLength);
}

/**
 * Calcula o checksum CRC16-CCITT (Polinômio 0x1021, valor inicial 0xFFFF).
 */
function calculateCRC16(payload: string): string {
  let crc = 0xffff;
  const polynomial = 0x1021;

  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ polynomial) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }

  return (crc & 0xffff).toString(16).toUpperCase().padStart(4, '0');
}

/**
 * Gera o payload Pix BR Code completo.
 */
export function generatePixPayload(config: PixConfig): string {
  const {
    pixKey,
    merchantName,
    merchantCity,
    amount,
    description = 'Apoio GlassHub',
    txId = '***',
  } = config;

  // ID 00: Payload Format Indicator (versão '01')
  const payloadFormat = formatTLV('00', '01');

  // ID 26: Merchant Account Information (GUI + Chave Pix + Descrição Opcional)
  const gui = formatTLV('00', 'br.gov.bcb.pix');
  const key = formatTLV('01', pixKey.trim());
  const desc = description ? formatTLV('02', normalizeString(description, 40)) : '';
  const merchantAccountInfo = formatTLV('26', `${gui}${key}${desc}`);

  // ID 52: Merchant Category Code ('0000' = Geral)
  const mcc = formatTLV('52', '0000');

  // ID 53: Transaction Currency ('986' = Real Brasileiro BRL)
  const currency = formatTLV('53', '986');

  // ID 54: Transaction Amount (opcional)
  const amountField = amount && amount > 0 ? formatTLV('54', amount.toFixed(2)) : '';

  // ID 58: Country Code ('BR')
  const countryCode = formatTLV('58', 'BR');

  // ID 59: Merchant Name (máx 25 caracteres, sem acentos)
  const name = formatTLV('59', normalizeString(merchantName, 25));

  // ID 60: Merchant City (máx 15 caracteres, sem acentos)
  const city = formatTLV('60', normalizeString(merchantCity, 15));

  // ID 62: Additional Data Field Template (TxID / Reference Label)
  const txIdField = formatTLV('05', txId);
  const additionalData = formatTLV('62', txIdField);

  // Concatenação de todos os campos antes do CRC16 (ID 63)
  const rawPayload = `${payloadFormat}${merchantAccountInfo}${mcc}${currency}${amountField}${countryCode}${name}${city}${additionalData}6304`;

  // Cálculo e anexo do CRC16
  const checksum = calculateCRC16(rawPayload);

  return `${rawPayload}${checksum}`;
}

/**
 * Configuração padrão do Pix do GlassHub
 * Cidade atualizada: 'RIB DAS NEVES' (máx 15 caracteres, sem acentos)
 */
export const GLASSHUB_PIX_CONFIG: PixConfig = {
  pixKey: 'matheustheus27@gmail.com',
  merchantName: 'MATHEUS T S FERREIRA',
  merchantCity: 'RIB DAS NEVES',
  description: 'Apoio GlassHub',
  txId: '***',
};

/**
 * Gera a string Pix oficial do GlassHub
 */
export function getGlassHubPixPayload(amount?: number): string {
  return generatePixPayload({
    ...GLASSHUB_PIX_CONFIG,
    amount,
  });
}
