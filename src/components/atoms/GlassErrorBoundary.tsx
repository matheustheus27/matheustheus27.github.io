import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { Heading } from './Heading';
import { Text } from './Text';
import { Button } from './Button';

interface Props {
  children: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class GlassErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('GlassHub Error Boundary caught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="py-24 px-4 text-center max-w-xl mx-auto min-h-[60vh] flex flex-col items-center justify-center relative z-10">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-6 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <AlertTriangle className="w-8 h-8 mx-auto" />
          </div>

          <Heading level="h2" gradient="cosmic" className="mb-3">
            Oscilação de Rede Cósmica
          </Heading>

          <Text variant="muted" size="base" className="mb-6 leading-relaxed">
            Ocorreu uma instabilidade pontual ao carregar este módulo. O sistema reteve os dados de navegação e você pode retornar ao portal com segurança.
          </Text>

          <Button
            variant="glow-primary"
            onClick={this.handleReset}
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Voltar ao Portal Principal
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
