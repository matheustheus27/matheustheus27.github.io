import { Language } from '../locales';

export interface IArticleReference {
  title: string;
  url: string;
  sourceName?: string;
  note?: string;
}

export interface IArticleAuthor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface IArticleSection {
  id: string;
  title: string;
  content: string[];
  codeSnippet?: {
    language: string;
    filename?: string;
    code: string;
  };
  callout?: {
    type: 'info' | 'warning' | 'tip' | 'quote';
    text: string;
    author?: string;
  };
}

export interface IArticleItem {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  tags: string[];
  url?: string;
  slug: string;
  featured?: boolean;
  author: IArticleAuthor;
  sections: IArticleSection[];
  references: IArticleReference[];
}

const defaultAuthorPt: IArticleAuthor = {
  name: 'Matheus Ferreira',
  role: 'Engenheiro de Software & Arquiteto de Soluções',
  avatar: 'https://github.com/matheustheus27.png',
  bio: 'Engenheiro de Software focado em arquiteturas sustentáveis, ergonomia cognitiva no desenvolvimento e sistemas distribuídos de alta escala.',
};

const defaultAuthorEn: IArticleAuthor = {
  name: 'Matheus Ferreira',
  role: 'Software Engineer & Solutions Architect',
  avatar: 'https://github.com/matheustheus27.png',
  bio: 'Software Engineer focused on sustainable architectures, cognitive ergonomics in development, and high-scale distributed systems.',
};

export const articlesDataPt: IArticleItem[] = [
  {
    id: 'cosmic-architecture-atomic-design',
    title: 'Arquitetura Cósmica e Design Atômico: O Universo como a Engenharia Mais Eficiente que Existe',
    subtitle: 'Uma reflexão filosófica e acessível sobre como as leis de eficiência da natureza inspiram a criação de sistemas de software modulares, elegantes e sustentáveis.',
    summary:
      'Descubra por que a física do cosmos e o Design Atômico compartilham o mesmo princípio fundamental: pequenos elementos autônomos trabalhando em perfeita sintonia para movimentar grandes engrenagens sem gerar caos.',
    publishedAt: '21 de Agosto, 2026',
    updatedAt: '21 de Agosto, 2026',
    readTime: '7 min de leitura',
    tags: ['Filosofia de Software', 'Design Atômico', 'Engenharia Cósmica', 'Arquitetura Modular', 'Eficiência'],
    slug: 'cosmic-architecture-atomic-design',
    featured: true,
    author: defaultAuthorPt,
    sections: [
      {
        id: 'universo-eficiencia',
        title: '1. O Universo Não Desperdiça Energia: A Busca Pela Eficiência Máxima',
        content: [
          'Quando contemplamos o céu noturno ou observamos a estrutura de um átomo sob o microscópio, é impossível não se impressionar com a exatidão da natureza. O universo é o sistema mais complexo, antigo e perfeito que conhecemos. E ele funciona perfeitamente por um motivo fundamental: o princípio da eficiência e mínima ação.',
          'Na física, a natureza sempre escolhe a trajetória de menor resistência e a forma cósmica que consome menos energia para manter a estabilidade. Esferas perfeitas formam gotas de água e planetas; forças gravitacionais mantêm órbitas equilibradas sem atrito desnecessário.',
          'Em sistemas de software, o objetivo final da engenharia é exatamente o mesmo: construir arquiteturas onde a informação flua sem atrito, onde a energia dos desenvolvedores não seja desperdiçada apagando incêndios e onde cada peça cumpra seu papel com máxima clareza.',
        ],
        callout: {
          type: 'quote',
          text: 'A simplicidade é o último grau de sofisticação. Quando imitamos a economia de energia do cosmos em nosso código, transformamos caos em harmonia.',
          author: 'Inspiração Filosófica de Engenharia',
        },
      },
      {
        id: 'do-atomo-a-galaxia',
        title: '2. Do Átomo à Galáxia: A Hierarquia da Construção Modular',
        content: [
          'No mundo físico, tudo o que vemos — desde uma gota de orvalho até uma estrela gigante — é construído combinando uma quantidade limitada de elementos atômicos simples. Prótons, nêutrons e elétrons formam átomos; átomos se unem para formar moléculas; moléculas criam células, matérias e corpos celestes.',
          'No desenvolvimento moderno de aplicações, o Design Atômico segue exatamente a mesma lógica natural. Em vez de tentarmos construir telas gigantescas e monolíticas de uma só vez, começamos construindo os "átomos" do nosso sistema: botões, ícones, rótulos e campos de entrada.',
          'Quando combinamos esses átomos simples de forma padronizada, formamos "moléculas" (como um campo de busca com botão). O agrupamento de moléculas resulta em "organismos" (como uma barra de navegação inteira), que por sua vez compõem os "sistemas" ou galáxias funcionais da nossa plataforma.',
        ],
        codeSnippet: {
          language: 'typescript',
          filename: 'CosmicHierarchy.ts',
          code: `// 1. Átomo (Menor unidade indivisível)
const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;

// 2. Molécula (Combinação harmoniosa de átomos)
const SearchBar = ({ onSearch }) => (
  <div className="search-molecule">
    <Input placeholder="Buscar tópicos..." />
    <Button label="Pesquisar" onClick={onSearch} />
  </div>
);

// 3. Organismo / Galáxia (Estrutura completa autônoma)
const HeaderNav = () => (
  <header className="cosmos-header">
    <Logo />
    <SearchBar />
    <UserAvatar />
  </header>
);`,
        },
      },
      {
        id: 'engrenagem-desacoplamento',
        title: '3. A Grande Engrenagem: O Poder do Desacoplamento Cósmico',
        content: [
          'Imagine o que aconteceria se os planetas do Sistema Solar estivessem fisicamente amarrados uns aos outros por cabos de aço rígidos. Qualquer pequena oscilação ou colisão na órbita de Mercúrio puxaria a Terra e Marte instantaneamente, destruindo todo o sistema em um colapso em cadeia!',
          'Felizmente, o cosmos utiliza o desacoplamento. Os corpos celestes interagem através de forças bem definidas (gravidade, eletromagnetismo), mantendo sua autonomia individual. Se um meteoro atinge a Lua, a órbita da Terra continua estável e funcional.',
          'Na engenharia de software, o acoplamento rígido é o cabo de aço invisível que destrói projetos. Quando uma mudança em um componente de UI quebra a regra de negócio do outro lado da aplicação, o sistema perde sua resiliência. Componentes desacoplados funcionam como planetas: comunicam-se por interfaces bem definidas, mas permanecem 100% autônomos.',
        ],
        callout: {
          type: 'tip',
          text: 'Componentes desacoplados e atômicos permitem que qualquer membro da equipe — do estagiário ao arquiteto staff — altere uma engrenagem local sem o medo de colapsar o ecossistema inteiro.',
        },
      },
      {
        id: 'conclusao-sustentabilidade',
        title: '4. Conclusão: Escrevendo Código que Envelhece com Elegância',
        content: [
          'Projetar software com visão atômica e cósmica não é apenas sobre aplicar uma metáfora bonita. É sobre reconhecer que a melhor engenharia é aquela que respeita a ordem natural das coisas.',
          'Quando estruturamos nossos projetos com partes simples, reutilizáveis e desacopladas, construímos produtos que envelhecem com a mesma elegância das estrelas: sustentáveis, previsíveis e fáceis de evoluir pelas próximas gerações de desenvolvedores.',
        ],
      },
    ],
    references: [
      {
        title: 'Atomic Design Methodology by Brad Frost',
        url: 'https://atomicdesign.bradfrost.com/',
        sourceName: 'Design Systems Manual',
        note: 'Conceitos primordiais da metodologia atômica aplicada a interfaces de software.',
      },
      {
        title: 'Princípio da Mínima Ação na Física e Engenharia',
        url: 'https://en.wikipedia.org/wiki/Principle_of_least_action',
        sourceName: 'Physics Fundamentals',
        note: 'Fundamentação científica sobre a eficiência de energia em sistemas naturais.',
      },
    ],
  },
  {
    id: 'atomic-architecture-cognitive-load',
    title: 'Arquitetura Atômica e Carga Cognitiva: Como o Desacoplamento Protege a Mente do Desenvolvedor',
    subtitle: 'Entenda como componentes pequenos, isolados e com responsabilidade única reduzem o estresse técnico, aceleram o aprendizado e facilitam a entrada de novos membros na equipe.',
    summary:
      'Uma reflexão didática sobre a relação entre a Teoria da Carga Cognitiva e a organização de código: como transformar sistemas caóticos em estruturas modulares fáceis de compreender por estagiários e especialistas.',
    publishedAt: '21 de Agosto, 2026',
    updatedAt: '21 de Agosto, 2026',
    readTime: '8 min de leitura',
    tags: ['Arquitetura de Software', 'Design Atômico', 'Carga Cognitiva', 'Boas Práticas', 'Ergonomia'],
    slug: 'atomic-architecture-cognitive-load',
    featured: true,
    author: defaultAuthorPt,
    sections: [
      {
        id: 'mente-humana',
        title: '1. O Cérebro Humano Não É um Servidor de Processamento Infinito',
        content: [
          'Quando um desenvolvedor entra em uma nova equipe ou abre uma base de código existente pela primeira vez, o maior desafio raramente é escrever uma nova função. O verdadeiro esforço consome horas tentando entender: "onde cada coisa está colocada?", "como as telas e regras de negócio se conversam?" e "se eu mexer aqui, o que pode quebrar do outro lado do sistema?".',
          'Diferente de um servidor ou de um banco de dados, que podem receber mais memória RAM ou mais núcleos de CPU quando a demanda cresce, o cérebro humano possui limites biológicos estritos de processamento.',
          'Na psicologia cognitiva, esse limite é explicado pela Teoria da Carga Cognitiva. Nossa memória de trabalho (aquela que usamos para raciocinar no momento presente) consegue segurar apenas poucas informações ao mesmo tempo. Quando tentamos equilibrar dezenas de regras e arquivos ao mesmo tempo, nossa mente fica sobrecarregada, gerando cansaço, estresse e erros.',
        ],
        callout: {
          type: 'info',
          text: 'Entender a carga cognitiva é o primeiro passo para perceber que escrever código limpo não é apenas um capricho técnico, mas um ato de empatia com a mente de quem vai ler o código depois.',
        },
      },
      {
        id: 'chunks-versus-instrucoes',
        title: '2. Como Lemos Código: Instrução por Instrução vs. Blocos Conceituais (Chunks)',
        content: [
          'Existe uma diferença marcante em como um profissional iniciante (como um estagiário ou júnior) e um especialista leem a mesma tela de código.',
          'Um especialista enxerga o sistema em "blocos conceituais" (chamados na psicologia de chunks). Quando ele vê um padrão bem estruturado, seu cérebro reconhece aquele bloco inteiro como uma única ideia simples.',
          'Já o iniciante precisa ler linha por linha, instrução por instrução. Se o código estiver cheio de variáveis globais ocultas, chamadas cruzadas e responsabilidades misturadas, a memória de trabalho do iniciante atinge o limite rapidamente.',
          'Pense nisso como ler um livro: é muito mais fácil ler um capítulo organizado do que tentar ler um texto onde cada frase envia você para uma nota de rodapé em outra página aleatória.',
        ],
      },
      {
        id: 'acoplamento-novela',
        title: '3. O Perigo do Alto Acoplamento: A "Efeito Dominó" nos Sistemas',
        content: [
          'No desenvolvimento de software, chamamos de "acoplamento" o grau de dependência entre as partes de um programa. Quando o acoplamento é alto, significa que um componente não consegue funcionar sem saber detalhes íntimos de vários outros.',
          'Imagine uma casa onde, para acender a luz da cozinha, você precisasse primeiro ligar o chuveiro do banheiro e ajustar o relógio da sala. Parece absurdo, mas é exatamente o que acontece em sistemas mal estruturados!',
          'Quando um desenvolvedor precisa realizar uma manutenção simples em um código altamente acoplado, ele é forçado a carregar a arquitetura inteira na cabeça antes de dar um clique. Isso transforma o onboarding (a integração de novos membros) em um processo lento, custoso e desgastante.',
        ],
        callout: {
          type: 'warning',
          text: 'O alto acoplamento e o excesso de estados compartilhados são os maiores causadores de fadiga mental e medo de alterar código em equipes de tecnologia.',
        },
      },
      {
        id: 'efeito-lego-atomico',
        title: '4. O Efeito LEGO: O Poder dos Componentes Atômicos e Desacoplados',
        content: [
          'Como podemos resolver esse problema e deixar o desenvolvimento mais leve para todos? A resposta está no Princípio da Responsabilidade Única e no Design Atômico.',
          'A ideia é simples e inspirada nos blocos de LEGO: em vez de construir uma peça única gigante e rígida, dividimos o sistema em pequenos componentes independentes, onde cada um faz apenas uma coisa e a faz muito bem.',
          'Componentes Atômicos possuem fronteiras claras (contratos bem definidos). O desenvolvedor só precisa entender o que entra e o que sai daquele bloco pontual, sem precisar se preocupar com o restante do universo do sistema.',
        ],
        codeSnippet: {
          language: 'typescript',
          filename: 'ConceitoGeralDeComponente.ts',
          code: `// ExemploConceitual: Componente Atômico com Fronteira Clara
// Não importa em qual linguagem/framework você esteja: o segredo é ter entradas e saídas bem definidas!

interface EntradaDoComponente {
  titulo: string;
  aoClique: () => void;
}

// O componente só cuida da sua própria responsabilidade visual e de ação
function BotaoDeAcao({ titulo, aoClique }: EntradaDoComponente) {
  // Regra isolada e previsível: sem dependências ocultas ou estados globais confusos!
  return RenderizarBotao({ texto: titulo, onClick: aoClique });
}`,
        },
      },
      {
        id: 'ergonomia-humana',
        title: '5. Ergonomia de Software: Por Que Cuidar do Código É Cuidar das Pessoas',
        content: [
          'Durante muito tempo, as decisões de arquitetura de software foram justificadas apenas por motivos de infraestrutura, como economizar servidores ou facilitar deploys.',
          'No entanto, a verdadeira Engenharia de Software moderna coloca o fator humano no centro. Uma arquitetura ergonômica reduz a ansiedade de errar, permite que iniciantes entreguem suas primeiras contribuições com segurança e mantém o time motivado e produtivo.',
          'Quando desacoplamos o código, estamos, na verdade, desacoplando o estresse da rotina de trabalho.',
        ],
        callout: {
          type: 'tip',
          text: 'Dica para o dia a dia: Antes de criar uma nova função ou componente, pergunte a si mesmo: "Alguém que acabou de entrar na equipe conseguiria entender este bloco em 2 minutos?"',
        },
      },
      {
        id: 'conclusao-pratica',
        title: '6. Conclusão: Passos Simples para Aplicar Hoje',
        content: [
          'Não importa se você trabalha com JavaScript, Python, C#, Java, Go ou qualquer outra tecnologia: os princípios de clareza cognitiva são universais.',
          '1. Quebre arquivos e funções gigantes em partes menores e focadas.',
          '2. Evite dependências ocultas e prefira passar informações de forma explícita.',
          '3. Documente o propósito de cada componente de forma simples e direta.',
          'Ao adotar componentes atômicos e desacoplados, construímos não apenas softwares melhores, mas também ambientes de trabalho mais saudáveis e inclusivos para profissionais de todos os níveis.',
        ],
      },
    ],
    references: [
      {
        title: 'Teoria da Carga Cognitiva no Desenvolvimento de Software',
        url: 'https://doi.org/10.1145/3584859',
        sourceName: 'Communications of the ACM',
        note: 'Estudo sobre como a memória de trabalho humana processa instruções e constrói blocos conceituais (chunks).',
      },
      {
        title: 'Fatores de Carga Cognitiva em Equipes de Engenharia de Software',
        url: 'https://ppig.org/papers/2022-ppig-33rd-helgesson/',
        sourceName: 'Psychology of Programming Interest Group (PPIG)',
        note: 'Pesquisa empírica demonstrando como a navegação e o acoplamento causam fadiga mental no desenvolvimento.',
      },
      {
        title: 'Design Atômico e Engenharia Baseada em Componentes',
        url: 'https://atomicdesign.bradfrost.com/',
        sourceName: 'Brad Frost Architecture',
        note: 'Metodologia de construção de sistemas através de elementos fundamentais desacoplados e reutilizáveis.',
      },
      {
        title: 'Padrões de Desacoplamento e Baixo Acoplamento (Loose Coupling)',
        url: 'https://martinfowler.com/articles/enterprisePatterns.html',
        sourceName: 'Martin Fowler',
        note: 'Conceitos universais de arquitetura limpa e segregação de responsabilidades.',
      },
    ],
  },
  {
    id: 'resilient-api-integrations',
    title: 'Padrões de Resiliência: Como Criar Integrações de Software Tolerantes a Falhas',
    subtitle: 'Aprenda os conceitos fundamentais de Circuit Breaker, Exponential Backoff com Jitter e Idempotência de forma simples e agnóstica.',
    summary:
      'Uma explicação didática e sem barreiras de linguagem sobre como proteger seus sistemas contra quedas de rede e instabilidades de serviços externos.',
    publishedAt: '28 de Julho, 2026',
    updatedAt: '15 de Agosto, 2026',
    readTime: '8 min de leitura',
    tags: ['Arquitetura', 'Resiliência', 'Sistemas Distribuídos', 'Integrações', 'Boas Práticas'],
    slug: 'resilient-software-integrations',
    featured: true,
    author: defaultAuthorPt,
    sections: [
      {
        id: 'rede-falha',
        title: '1. A Regra de Ouro das Integrações: Tudo o Que Pode Falhar, Falhará',
        content: [
          'Quando um software precisa se comunicar com outro sistema pela internet (seja uma API de pagamentos, um serviço de e-mail ou um banco de dados externo), devemos lembrar de uma verdade universal: a rede não é 100% confiável.',
          'Conexões podem oscilar, servidores externos podem ficar sobrecarregados e timeouts acontecem. Se o nosso código não estiver preparado para lidar com essas falhas, a nossa aplicação inteira pode parar de funcionar.',
        ],
        callout: {
          type: 'warning',
          text: 'Nunca faça chamadas externas assumindo que a resposta virá instantaneamente. Sempre defina limites de tempo (timeouts) e planos de contingência.',
        },
      },
      {
        id: 'disjuntor-circuit-breaker',
        title: '2. O Disjuntor de Código (Circuit Breaker)',
        content: [
          'Sabe o disjuntor da caixa de força da sua casa? Quando ocorre uma sobrecarga na rede elétrica, ele "desarma" para proteger os eletrodomésticos de queimarem.',
          'Em engenharia de software, o padrão Circuit Breaker faz exatamente a mesma coisa. Ele monitora as chamadas para um sistema externo. Se o sistema parceiro começar a falhar repetidamente, o disjuntor do código "abre" e para temporariamente de enviar requisições.',
          'Isso dá tempo para que o sistema parceiro se recupere, além de evitar que a sua própria aplicação fique travada esperando por algo que não vai responder.',
        ],
        codeSnippet: {
          language: 'typescript',
          filename: 'DisjuntorConceitual.ts',
          code: `// Pseudocódigo Universal de um Circuit Breaker

class DisjuntorDeProtecao {
  private estado: 'FECHADO' | 'ABERTO' | 'TESTANDO' = 'FECHADO';
  private contadorDeErros = 0;

  executarServico(acaoExterna, respostaDeReserva) {
    if (this.estado === 'ABERTO') {
      // Se o disjuntor está aberto, devolve o plano B na hora sem travar a aplicação!
      return respostaDeReserva;
    }

    try {
      const resultado = acaoExterna();
      this.contadorDeErros = 0; // Sucesso! Zera os erros.
      return resultado;
    } catch (erro) {
      this.contadorDeErros++;
      if (this.contadorDeErros >= 5) {
        this.estado = 'ABERTO'; // Muitas falhas: desarma o disjuntor!
      }
      return respostaDeReserva;
    }
  }
}`,
        },
      },
      {
        id: 'tentativas-backoff',
        title: '3. Tentando Novamente com Inteligência (Exponential Backoff e Jitter)',
        content: [
          'Quando uma requisição falha, o impulso inicial pode ser tentar de novo imediatamente. Mas pense comigo: se milhares de usuários tentarem fazer o mesmo ao mesmo tempo em um servidor instável, o servidor vai desmoronar de vez!',
          'A solução é o Atraso Exponencial com Pausas Aleatórias (Exponential Backoff com Jitter). Em vez de tentar a cada 1 segundo, esperamos 2s, depois 4s, depois 8s, e adicionamos alguns milissegundos aleatórios entre cada cliente.',
          'Essa aleatoriedade desincroniza os acessos e permite que o servidor respire e volte ao ar suavemente.',
        ],
      },
      {
        id: 'idempotencia-duplicados',
        title: '4. Idempotência: Evitando Cobranças e Ações Duplicadas',
        content: [
          'Imagine que um cliente clica no botão "Finalizar Compra", a rede oscila e a resposta atrasa. O cliente clica novamente no botão. Se o sistema não for idempotente, a compra pode ser cobrada duas vezes!',
          'Idempotência é a propriedade de um sistema que garante que executar a mesma operação múltiplas vezes gera exatamente o mesmo resultado de executar uma única vez.',
          'Conseguimos isso enviando uma "Chave Única de Transação" no cabeçalho. Se o sistema receber a mesma chave duas vezes, ele reconhece que já processou aquele pedido e devolve o resultado armazenado sem duplicar a ação.',
        ],
        callout: {
          type: 'tip',
          text: 'Entender idempotência é essencial para qualquer desenvolvedor que trabalhe com meios de pagamento, e-commerce ou mensageria.',
        },
      },
      {
        id: 'resiliencia-resumo',
        title: '5. Conclusão: Construindo Sistemas Confiáveis',
        content: [
          'Construir integrações resilientes não exige linguagens complexas. Exige apenas pensar com antecedência nos cenários de falha.',
          'Aplicando disjuntores de proteção, retries inteligentes e chaves de idempotência, garantimos que nossas aplicações continuem firmes mesmo em dias tempestuosos de infraestrutura.',
        ],
      },
    ],
    references: [
      {
        title: 'Padrões de Design em Nuvem: Circuit Breaker e Retry',
        url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker',
        sourceName: 'Microsoft Cloud Architecture',
        note: 'Guia conceitual sobre resiliência em sistemas distribuídos.',
      },
      {
        title: 'Estratégias de Backoff Exponencial e Jitter na Prática',
        url: 'https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/',
        sourceName: 'AWS Architecture',
        note: 'Análise sobre como evitar congestionamentos de rede em chamadas distribuídas.',
      },
    ],
  },
  {
    id: 'low-level-perf',
    title: 'Da Memória ao Processador: Como o Hardware Executa o Seu Código',
    subtitle: 'Compreenda a diferença entre Stack e Heap, localidade de cache e eficiência de instrução sem complicações matemáticas.',
    summary:
      'Uma viagem acessível pelos bastidores do computador: entenda como a memória RAM, o cache e o processador trabalham juntos para rodar qualquer linguagem de programação.',
    publishedAt: '15 de Junho, 2026',
    updatedAt: '20 de Junho, 2026',
    readTime: '7 min de leitura',
    tags: ['Hardware', 'Performance', 'Memória', 'Conceitos Fundamentais'],
    slug: 'low-level-performance-patterns',
    featured: false,
    author: defaultAuthorPt,
    sections: [
      {
        id: 'bastidores-hardware',
        title: '1. O Que Acontece Quando Seu Código Roda?',
        content: [
          'Não importa se você escreve código em JavaScript, Python, C#, Java ou C++: no final do dia, todas as instruções precisam ser traduzidas e executadas pelos circuitos físicos do processador (CPU).',
          'Entender como o hardware organiza a memória ajuda qualquer desenvolvedor a escrever algoritmos mais rápidos, limpos e econômicos.',
        ],
      },
      {
        id: 'mesa-deposito-memoria',
        title: '2. A Analogia da Mesa e do Depósito: Stack vs. Heap',
        content: [
          'Pense na memória do computador como dois espaços de trabalho diferentes:',
          '1. A Stack (Pilha) é como a sua mesa de trabalho imediata. Ela é extremamente rápida, bem organizada e limpa. Tudo o que está ali está ao alcance das mãos. Porém, o espaço é limitado.',
          '2. O Heap (Amontoado) é como um depósito grande no fundo do prédio. Ele tem um espaço enorme para guardar caixas gigantes, mas você precisa se levantar, caminhar até lá e procurar onde guardou cada caixa. Isso leva mais tempo.',
          'Quando criamos variáveis simples e rápidas, elas ficam na Stack. Quando criamos objetos grandes ou dinâmicos, eles vão para o Heap. Quanto mais usamos o Heap sem cuidado, mais o computador precisa gastar energia organizando o depósito.',
        ],
        codeSnippet: {
          language: 'typescript',
          filename: 'MemoriaConceitual.ts',
          code: `// Conceito: Variáveis de escopo rápido vs. Objetos dinâmicos
function calcularTotal() {
  let quantidade = 5; // Dados rápidos mantidos na Stack (mesa de trabalho)
  let preco = 10;

  // Objeto completo alocado no Heap (depósito)
  let pedido = { quantidade, preco, total: quantidade * preco };
  return pedido.total;
}`,
        },
      },
      {
        id: 'localidade-cache',
        title: '3. A Importância da Localidade de Cache: Trabalhando em Sequência',
        content: [
          'A CPU tem uma memória ultra-rápida grudada nela chamada Cache. Quando o processador vai buscar um dado na memória RAM, ele aproveita e traz junto os dados que estão vizinhos dele.',
          'Se guardarmos informações em uma sequência contínua (como um array / lista organizada), a CPU lê tudo de uma vez só! Mas se os dados estiverem espalhados aleatoriamente, a CPU precisa ficar parando e esperando buscar dados distantes.',
          'Isso é o que chamamos de Localidade de Cache. Organizar dados em sequência torna qualquer algoritmo até 10 vezes mais rápido!',
        ],
        callout: {
          type: 'info',
          text: 'Fazer o processador ler dados contínuos em sequência é o grande segredo por trás de motores de jogos 3D e bancos de dados ultrarrápidos.',
        },
      },
      {
        id: 'conclusao-hardware',
        title: '4. Conclusão: Pensando com Clareza de Hardware',
        content: [
          'Você não precisa ser um especialista em microeletrônica para escrever bons códigos. Basta lembrar que a simplicidade e a boa organização de dados são as melhores amigas da performance!',
        ],
      },
    ],
    references: [
      {
        title: 'Guia de Arquitetura de Processadores e Memória',
        url: 'https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html',
        sourceName: 'Intel Developer Documentation',
        note: 'Documentação sobre registradores, memória cache e execução de instruções.',
      },
    ],
  },
  {
    id: 'atomic-design-glass',
    title: 'Engenharia de Interfaces Translúcidas: Beleza Visual com Alta Performance',
    subtitle: 'Como criar sistemas de design modernos com profundidade visual sem prejudicar o desempenho dos navegadores ou a acessibilidade.',
    summary:
      'Descubra os princípios técnicos por trás do Glassmorphism e como equilibrar efeitos de transparência, aceleração de hardware e contraste visual WCAG AA.',
    publishedAt: '02 de Maio, 2026',
    updatedAt: '10 de Maio, 2026',
    readTime: '6 min de leitura',
    tags: ['UI/UX', 'Design System', 'Acessibilidade', 'Frontend', 'Performance'],
    slug: 'glassmorphic-design-systems',
    featured: false,
    author: defaultAuthorPt,
    sections: [
      {
        id: 'estetica-vidro',
        title: '1. A Magia das Interfaces com Profundidade Visual',
        content: [
          'O Glassmorphism (efeito visual de vidro fosco translúcido) tornou-se um dos estilos mais admirados do design moderno. Ele traz a sensação de camadas sobrepostas, mantendo o contexto do plano de fundo através de um desfoque suave.',
          'Porém, criar telas bonitas não é suficiente: elas precisam ser leves para os dispositivos dos usuários e perfeitamente legíveis para todas as pessoas.',
        ],
      },
      {
        id: 'gpu-render',
        title: '2. Como os Navegadores Processam Efeitos de Desfoque',
        content: [
          'Quando aplicamos um efeito de vidro (como backdrop-filter no CSS ou equivalentes em plataformas mobile), o dispositivo precisa capturar a imagem que está atrás do elemento, aplicar um desfoque de imagem em tempo real na GPU e desenhar o resultado final na tela.',
          'Para evitar travamentos de tela em celulares ou computadores antigos, devemos limitar a intensidade do desfoque e utilizar propriedades que ativem a aceleração por hardware da placa de vídeo.',
        ],
      },
      {
        id: 'acessibilidade-wcag',
        title: '3. Acessibilidade em Primeiro Lugar: Garantindo Leitura Fácil',
        content: [
          'Superfícies translúcidas podem se tornar difíceis de ler se o plano de fundo for claro demais ou possuir muitas informações.',
          'Para garantir acessibilidade total (seguindo as normas universais WCAG AA), aplicamos fundos escuros levemente dosados, sombras sutis em textos e bordas destacadas. Isso garante que qualquer pessoa possa ler o conteúdo com conforto visual.',
        ],
        callout: {
          type: 'tip',
          text: 'Design inclusivo é aquele que une beleza estética e facilidade de leitura para todos os públicos.',
        },
      },
    ],
    references: [
      {
        title: 'Diretrizes Globais de Acessibilidade Web (W3C WCAG 2.1)',
        url: 'https://www.w3.org/TR/WCAG21/',
        sourceName: 'W3C World Wide Web Consortium',
        note: 'Padrões internacionais de contraste e acessibilidade em telas digitais.',
      },
    ],
  },
];

export const articlesDataEn: IArticleItem[] = [
  {
    id: 'cosmic-architecture-atomic-design',
    title: 'Cosmic Architecture & Atomic Design: Why the Universe is the Ultimate Engineering System',
    subtitle: 'A philosophical yet accessible reflection on how nature\'s laws of efficiency inspire sustainable, elegant, and modular software design.',
    summary:
      'Discover why cosmic physics and Atomic Design share the exact same core principle: small autonomous elements working in perfect synergy to drive massive engines without generating chaos.',
    publishedAt: 'August 21, 2026',
    updatedAt: 'August 21, 2026',
    readTime: '7 min read',
    tags: ['Software Philosophy', 'Atomic Design', 'Cosmic Engineering', 'Modular Architecture', 'Efficiency'],
    slug: 'cosmic-architecture-atomic-design',
    featured: true,
    author: defaultAuthorEn,
    sections: [
      {
        id: 'universo-eficiencia',
        title: '1. The Universe Does Not Waste Energy: The Pursuit of Maximum Efficiency',
        content: [
          'When we gaze at the night sky or observe an atomic structure under a microscope, we cannot help but be awed by nature\'s precision. The universe is the most complex, ancient, and perfect system we know. And it functions flawlessly for a fundamental reason: the principle of least action and efficiency.',
          'In physics, nature always chooses the path of least resistance and the spatial form that consumes the least energy to maintain stability. Perfect spheres form water droplets and planets; gravitational forces keep orbits balanced without unnecessary friction.',
          'In software engineering, the ultimate goal is identical: to build architectures where information flows without friction, where developer energy isn\'t wasted extinguishing fires, and where every piece performs its role with absolute clarity.',
        ],
        callout: {
          type: 'quote',
          text: 'Simplicity is the ultimate sophistication. When we emulate the cosmos\' energy conservation in code, we transform chaos into harmony.',
          author: 'Engineering Philosophy',
        },
      },
      {
        id: 'do-atomo-a-galaxia',
        title: '2. From Atom to Galaxy: The Hierarchy of Modular Construction',
        content: [
          'In the physical world, everything we see — from a drop of dew to a massive star — is built by combining a limited set of simple atomic elements. Protons, neutrons, and electrons form atoms; atoms bond into molecules; molecules create cells, matter, and celestial bodies.',
          'In modern application development, Atomic Design follows the exact same natural logic. Instead of attempting to build monolithic, giant screens all at once, we start by crafting our system\'s "atoms": buttons, icons, labels, and input fields.',
          'When we combine these simple atoms in a standardized manner, we form "molecules" (such as a search bar with a button). Grouping molecules produces "organisms" (like an entire navigation header), which in turn compose the functional "systems" or galaxies of our platform.',
        ],
        codeSnippet: {
          language: 'typescript',
          filename: 'CosmicHierarchy.ts',
          code: `// 1. Atom (Smallest indivisible unit)
const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;

// 2. Molecule (Harmonious combination of atoms)
const SearchBar = ({ onSearch }) => (
  <div className="search-molecule">
    <Input placeholder="Search topics..." />
    <Button label="Search" onClick={onSearch} />
  </div>
);

// 3. Organism / Galaxy (Complete autonomous structure)
const HeaderNav = () => (
  <header className="cosmos-header">
    <Logo />
    <SearchBar />
    <UserAvatar />
  </header>
);`,
        },
      },
      {
        id: 'engrenagem-desacoplamento',
        title: '3. The Grand Engine: The Power of Cosmic Decoupling',
        content: [
          'Imagine what would happen if the planets in our Solar System were physically linked to one another by rigid steel cables. Any slight collision in Mercury\'s orbit would instantly pull Earth and Mars, collapsing the entire system in a catastrophic chain reaction!',
          'Fortunately, the cosmos utilizes decoupling. Celestial bodies interact through well-defined forces (gravity, electromagnetism), preserving their individual autonomy. If a meteor strikes the Moon, Earth\'s orbit remains stable and functional.',
          'In software engineering, tight coupling is the invisible steel cable that destroys codebases. When a change in a UI component breaks a business rule across the app, the system loses its resilience. Decoupled components act like planets: they communicate via clear interfaces while remaining 100% autonomous.',
        ],
        callout: {
          type: 'tip',
          text: 'Decoupled atomic components allow any team member — from intern to staff architect — to modify a local gear without fear of collapsing the entire ecosystem.',
        },
      },
      {
        id: 'conclusao-sustentabilidade',
        title: '4. Conclusion: Writing Code That Ages with Grace',
        content: [
          'Designing software with an atomic and cosmic vision is not merely about using a pretty metaphor. It is about recognizing that the finest engineering respects the natural order of things.',
          'When we structure our projects using simple, reusable, and decoupled parts, we build products that age with the same elegance as stars: sustainable, predictable, and effortless for future generations of developers to evolve.',
        ],
      },
    ],
    references: [
      {
        title: 'Atomic Design Methodology by Brad Frost',
        url: 'https://atomicdesign.bradfrost.com/',
        sourceName: 'Design Systems Manual',
        note: 'Core concepts of atomic methodology applied to software interfaces.',
      },
      {
        title: 'Principle of Least Action in Physics and Engineering',
        url: 'https://en.wikipedia.org/wiki/Principle_of_least_action',
        sourceName: 'Physics Fundamentals',
        note: 'Scientific foundation regarding energy efficiency in natural systems.',
      },
    ],
  },
  {
    id: 'atomic-architecture-cognitive-load',
    title: 'Atomic Architecture and Cognitive Load: How Code Decoupling Protects the Developer Mind',
    subtitle: 'Learn how small, isolated, single-responsibility components reduce technical stress, accelerate learning, and ease onboarding for new team members.',
    summary:
      'A didactic reflection on the relationship between Cognitive Load Theory and code organization: transforming chaotic systems into clear, modular structures easily understood from interns to staff engineers.',
    publishedAt: 'August 12, 2026',
    updatedAt: 'August 21, 2026',
    readTime: '8 min read',
    tags: ['Software Architecture', 'Atomic Design', 'Cognitive Load', 'Best Practices', 'Ergonomics'],
    slug: 'atomic-architecture-cognitive-load',
    featured: true,
    author: defaultAuthorEn,
    sections: [
      {
        id: 'mente-humana',
        title: '1. The Human Brain Is Not an Infinite Processing Server',
        content: [
          'When a software engineer joins a new team or inspects an existing codebase for the first time, the primary hurdle is rarely writing a new function. The true cognitive effort is spent figuring out: "where is everything placed?", "how do screens and business logic talk to each other?", and "if I change code here, what breaks on the other side of the system?".',
          'Unlike a cloud server or a database engine, which can scale up with more RAM or CPU cores when demand spikes, the human mind operates under strict biological processing limits.',
          'In cognitive psychology, this bottleneck is explained by Cognitive Load Theory. Our working memory (the mental workspace used for active reasoning) can only hold a few pieces of information at once. Trying to balance dozens of implicit variables and files simultaneously leads to mental fatigue, stress, and bugs.',
        ],
        callout: {
          type: 'info',
          text: 'Understanding cognitive load is the first step toward realizing that clean code is not just a technical preference, but an act of empathy for whoever reads the code next.',
        },
      },
      {
        id: 'chunks-versus-instrucoes',
        title: '2. How We Read Code: Line-by-Line vs. Conceptual Chunks',
        content: [
          'There is a striking difference in how novice developers (such as interns or junior engineers) and seasoned experts read the exact same source code.',
          'An expert views the system in "conceptual blocks" (known in psychology as chunks). When they encounter well-structured architectural patterns, their brain recognizes the entire block as a single unified concept.',
          'In contrast, a novice reads linearly, instruction by instruction. If the code contains hidden global state, tight coupling, and tangled responsibilities, the novice working memory reaches capacity almost immediately.',
          'Think of it like reading a book: it is far easier to follow a well-organized chapter than a text where every sentence forces you to flip to an obscure footnote on a different random page.',
        ],
      },
      {
        id: 'acoplamento-novela',
        title: '3. The Hazard of High Coupling: Domino Effects in Systems',
        content: [
          'In software engineering, "coupling" describes the degree of interdependence between different code modules. When coupling is high, a component cannot function without intimate knowledge of many other parts.',
          'Imagine a house where, to turn on the kitchen light, you had to first turn on the bathroom shower and set the living room clock. It sounds absurd, yet that is precisely what happens in tightly coupled codebases!',
          'When an engineer performs routine maintenance on coupled code, they are forced to load the entire architectural state into their head before making a single edit. This turns team onboarding into a slow, costly, and exhausting ordeal.',
        ],
        callout: {
          type: 'warning',
          text: 'Tight coupling and hidden shared state are the primary drivers of developer cognitive overload and technical anxiety in engineering teams.',
        },
      },
      {
        id: 'efeito-lego-atomico',
        title: '4. The LEGO Effect: The Power of Atomic Decoupled Components',
        content: [
          'How can we solve this and make development smoother for everyone? The answer lies in the Single Responsibility Principle and Atomic Design.',
          'The concept is simple and inspired by LEGO bricks: instead of crafting a giant, rigid monolith, we break the system into small, independent components where each unit does one thing and does it well.',
          'Atomic Components possess clear boundaries (well-defined contracts). The developer only needs to understand what goes in and what comes out of that specific block, without needing to hold the rest of the software universe in mind.',
        ],
        codeSnippet: {
          language: 'typescript',
          filename: 'GeneralComponentConcept.ts',
          code: `// Conceptual Example: Atomic Component with Clear Boundary
// Regardless of framework or language: the secret is explicit input and output contracts!

interface ComponentInput {
  title: string;
  onClickAction: () => void;
}

// The component solely manages its own visual contract and action
function ActionButton({ title, onClickAction }: ComponentInput) {
  // Predictable and isolated logic: zero hidden dependencies or confusing global state!
  return RenderButton({ text: title, onClick: onClickAction });
}`,
        },
      },
      {
        id: 'ergonomia-humana',
        title: '5. Software Ergonomics: Caring for Code Is Caring for People',
        content: [
          'For decades, software architecture decisions were justified almost exclusively through infra metrics, such as saving server resources or simplifying deployment pipelines.',
          'However, modern Software Engineering places the human factor at the core. Ergonomic architecture reduces fear of making mistakes, empowers newcomers to ship their first pull requests with confidence, and keeps engineering teams energized and productive.',
          'When we decouple code, we are fundamentally decoupling stress from the daily workflow.',
        ],
        callout: {
          type: 'tip',
          text: 'Daily engineering tip: Before creating a new function or module, ask yourself: "Could someone who joined the team today understand this block in under 2 minutes?"',
        },
      },
      {
        id: 'conclusao-pratica',
        title: '6. Conclusion: Practical Principles You Can Apply Today',
        content: [
          'No matter if you write JavaScript, Python, C#, Java, Go, or any other technology: cognitive clarity principles are universal.',
          '1. Break massive files and functions into small, focused units.',
          '2. Avoid implicit dependencies and favor explicit parameters.',
          '3. Document the purpose of each component clearly and concisely.',
          'By embracing atomic, decoupled components, we build not only better software systems, but healthier, more inclusive engineering environments for developers of all experience levels.',
        ],
      },
    ],
    references: [
      {
        title: 'Cognitive Load Theory in Software Development',
        url: 'https://doi.org/10.1145/3584859',
        sourceName: 'Communications of the ACM',
        note: 'Scientific paper exploring how human working memory processes instructions and forms conceptual chunks.',
      },
      {
        title: 'Cognitive Load Drivers in Novice Agile Software Development Teams',
        url: 'https://ppig.org/papers/2022-ppig-33rd-helgesson/',
        sourceName: 'Psychology of Programming Interest Group (PPIG)',
        note: 'Empirical study showing code navigation and coupling as primary triggers of developer mental fatigue.',
      },
      {
        title: 'Atomic Design & Component-Based Software Engineering',
        url: 'https://atomicdesign.bradfrost.com/',
        sourceName: 'Brad Frost Architecture',
        note: 'Methodology for building digital systems using decoupled, reusable foundational elements.',
      },
      {
        title: 'Decoupling Patterns and Loose Coupling Architecture',
        url: 'https://martinfowler.com/articles/enterprisePatterns.html',
        sourceName: 'Martin Fowler',
        note: 'Universal software architecture principles for clean separation of concerns.',
      },
    ],
  },
  {
    id: 'resilient-api-integrations',
    title: 'Resilience Patterns: Building Fault-Tolerant Software Integrations',
    subtitle: 'Learn the core concepts of Circuit Breakers, Exponential Backoff with Jitter, and Idempotency in a clear, stack-agnostic way.',
    summary:
      'A didactic and stack-agnostic guide to protecting your applications from network outages and third-party API instabilities.',
    publishedAt: 'July 28, 2026',
    updatedAt: 'August 15, 2026',
    readTime: '8 min read',
    tags: ['Architecture', 'Resilience', 'Distributed Systems', 'Integrations', 'Best Practices'],
    slug: 'resilient-software-integrations',
    featured: true,
    author: defaultAuthorEn,
    sections: [
      {
        id: 'rede-falha',
        title: '1. The Golden Rule of Integrations: Everything Fails Eventually',
        content: [
          'Whenever software connects across a network (to a payment gateway, email API, or cloud database), we must remember a universal truth: networks are never 100% reliable.',
          'Connections drop, external servers get overloaded, and timeouts happen. If our code is unprepared, the entire application can grind to a halt.',
        ],
        callout: {
          type: 'warning',
          text: 'Never execute external calls assuming instant responses. Always configure strict timeouts and fallback mechanisms.',
        },
      },
      {
        id: 'disjuntor-circuit-breaker',
        title: '2. The Software Circuit Breaker',
        content: [
          'Just like an electrical breaker trips to protect home appliances from power surges, the Circuit Breaker pattern monitors external integration health.',
          'If an external system starts failing repeatedly, the circuit breaker opens, immediately returning a graceful fallback response instead of hanging user requests.',
        ],
        codeSnippet: {
          language: 'typescript',
          filename: 'ConceptualCircuitBreaker.ts',
          code: `// Universal Circuit Breaker Pseudocode

class ProtectionCircuitBreaker {
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private failureCount = 0;

  executeService(externalAction, fallbackResponse) {
    if (this.state === 'OPEN') {
      // Return fallback immediately without blocking the application!
      return fallbackResponse;
    }

    try {
      const result = externalAction();
      this.failureCount = 0; // Success! Reset error count.
      return result;
    } catch (err) {
      this.failureCount++;
      if (this.failureCount >= 5) {
        this.state = 'OPEN'; // Too many failures: trip the breaker!
      }
      return fallbackResponse;
    }
  }
}`,
        },
      },
      {
        id: 'tentativas-backoff',
        title: '3. Retrying Intelligently (Exponential Backoff & Jitter)',
        content: [
          'Retrying immediately after a failure can crash unstable servers. Instead, we use Exponential Backoff with randomized Jitter (waiting 2s, 4s, 8s plus random milliseconds).',
          'This desynchronizes client retries, allowing overloaded services to recover smoothly.',
        ],
      },
      {
        id: 'idempotencia-duplicados',
        title: '4. Idempotency: Preventing Duplicate Charges and Actions',
        content: [
          'If a user submits a payment and network lag prompts a second click, an idempotent system guarantees the charge occurs exactly once by referencing a unique Idempotency Key.',
        ],
        callout: {
          type: 'tip',
          text: 'Mastering idempotency is essential for anyone building payment flows, e-commerce platforms, or event-driven systems.',
        },
      },
      {
        id: 'resiliencia-resumo',
        title: '5. Conclusion: Crafting Reliable Systems',
        content: [
          'Resilient integrations require anticipating failure scenarios early. By employing circuit breakers, smart retries, and idempotency keys, systems remain stable even during infrastructure storms.',
        ],
      },
    ],
    references: [
      {
        title: 'Cloud Architecture Design Patterns: Circuit Breaker',
        url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker',
        sourceName: 'Microsoft Cloud Architecture',
        note: 'Conceptual pattern guide for fault tolerance in software architecture.',
      },
      {
        title: 'Exponential Backoff and Jitter Strategies',
        url: 'https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/',
        sourceName: 'AWS Architecture',
        note: 'Analysis on avoiding thundering herd problems in distributed calls.',
      },
    ],
  },
  {
    id: 'low-level-perf',
    title: 'From Memory to CPU: How Hardware Executes Your Code',
    subtitle: 'Understand the difference between Stack and Heap, cache locality, and instruction efficiency without complex math.',
    summary:
      'An accessible journey behind the scenes of computing: see how RAM, CPU caches, and processors work together to run any programming language.',
    publishedAt: 'June 15, 2026',
    updatedAt: 'June 20, 2026',
    readTime: '7 min read',
    tags: ['Hardware', 'Performance', 'Memory', 'Core Concepts'],
    slug: 'low-level-performance-patterns',
    featured: false,
    author: defaultAuthorEn,
    sections: [
      {
        id: 'bastidores-hardware',
        title: '1. What Happens When Your Code Runs?',
        content: [
          'Whether you write JavaScript, Python, C#, Java, or C++, every instruction is eventually executed by the physical circuits of the CPU.',
          'Understanding how hardware arranges memory helps any developer write faster, cleaner, and more energy-efficient algorithms.',
        ],
      },
      {
        id: 'mesa-deposito-memoria',
        title: '2. The Desk and Warehouse Analogy: Stack vs. Heap',
        content: [
          'Think of computer memory like two different work areas:',
          '1. The Stack is like your immediate desk workspace. It is lightning-fast, structured, and organized, though space is limited.',
          '2. The Heap is like a large storage warehouse in the back of the building. It has vast space for large boxes, but walking over to locate items takes more time.',
          'Simple variables stay on the Stack. Large dynamic objects go to the Heap. Keeping memory usage structured keeps the processor running at peak speed.',
        ],
        codeSnippet: {
          language: 'typescript',
          filename: 'MemoryConcept.ts',
          code: `// Concept: Fast Stack Variables vs. Dynamic Heap Objects
function calculateTotal() {
  let quantity = 5; // Fast Stack value (desk workspace)
  let price = 10;

  // Object allocated on the Heap (warehouse)
  let order = { quantity, price, total: quantity * price };
  return order.total;
}`,
        },
      },
      {
        id: 'localidade-cache',
        title: '3. Cache Locality: Processing Data in Contiguous Sequences',
        content: [
          'CPUs feature ultra-fast onboard Cache. When pulling data from RAM, the processor also fetches adjacent memory cells.',
          'Storing data sequentially (like contiguous arrays) allows the CPU to read elements in a single sweep, boosting performance by up to 10x.',
        ],
        callout: {
          type: 'info',
          text: 'Structuring contiguous memory access is the key secret behind high-throughput game engines and modern databases.',
        },
      },
      {
        id: 'conclusao-hardware',
        title: '4. Conclusion: Thinking with Hardware Clarity',
        content: [
          'You do not need to be a microelectronics engineer to write great code. Simply remember that simplicity and data organization are performance\'s best friends.',
        ],
      },
    ],
    references: [
      {
        title: 'Processor and Memory Architecture Manual',
        url: 'https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html',
        sourceName: 'Intel Developer Documentation',
        note: 'Core manual on registers, CPU caches, and instruction pipelines.',
      },
    ],
  },
  {
    id: 'atomic-design-glass',
    title: 'Translucent Interface Engineering: Visual Elegance with High Performance',
    subtitle: 'How to build modern design systems with depth without compromising browser frame rates or accessibility.',
    summary:
      'Discover technical principles behind Glassmorphism and how to balance translucency, hardware acceleration, and WCAG AA visual contrast.',
    publishedAt: 'May 02, 2026',
    updatedAt: 'May 10, 2026',
    readTime: '6 min read',
    tags: ['UI/UX', 'Design System', 'Accessibility', 'Frontend', 'Performance'],
    slug: 'glassmorphic-design-systems',
    featured: false,
    author: defaultAuthorEn,
    sections: [
      {
        id: 'estetica-vidro',
        title: '1. The Magic of Translucent Interfaces',
        content: [
          'Glassmorphism brings hierarchical depth to modern UIs by preserving background context under soft translucent blurs.',
          'However, beautiful screens must also remain performant on low-power devices and fully readable for all users.',
        ],
      },
      {
        id: 'gpu-render',
        title: '2. How Browsers Render Backdrop Blur Effects',
        content: [
          'Applying backdrop blurs forces the GPU to capture under-layers, execute real-time shaders, and composite output frames.',
          'To prevent FPS drops, keep blur radii optimized and utilize hardware acceleration CSS properties.',
        ],
      },
      {
        id: 'acessibilidade-wcag',
        title: '3. Accessibility First: Ensuring Effortless Reading',
        content: [
          'Translucent surfaces risk text illegibility if backgrounds have variable brightness.',
          'Adhering to WCAG AA contrast standards involves combining dark translucent tints, subtle text shadows, and distinct borders so everyone reads comfortably.',
        ],
        callout: {
          type: 'tip',
          text: 'Inclusive design unites visual elegance with accessible readability for all users.',
        },
      },
    ],
    references: [
      {
        title: 'Web Content Accessibility Guidelines (W3C WCAG 2.1)',
        url: 'https://www.w3.org/TR/WCAG21/',
        sourceName: 'W3C',
        note: 'International contrast and digital accessibility standards.',
      },
    ],
  },
];

export const articlesData = {
  'pt-BR': articlesDataPt,
  'en-US': articlesDataEn,
};

export const getArticlesData = (lang: Language): IArticleItem[] => {
  return articlesData[lang] || articlesDataPt;
};
