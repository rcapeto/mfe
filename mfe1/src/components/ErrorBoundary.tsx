import { Component, ReactNode } from 'react';

type Props = {
  errorMessage?: string,
  children: ReactNode,
}

type State = {
  hasError: boolean,
}

export class ErrorBoundary extends Component<Props, State> {
   constructor(props: Props) {
     super(props);
     this.state = { hasError: false };
   }
 
   static getDerivedStateFromError() {
     // Update state so the next render will show the fallback UI.
     return { hasError: true };
   }
 
   componentDidCatch(error: unknown, errorInfo: unknown) {
    console.log('Error catch by ErrorBoundary', {
      error,
      errorInfo
    })
     // You can also log the error to an error reporting service
   }
 
   render() {
     if (this.state.hasError) {
      const message = this.props.errorMessage ?? 'Something went wrong'
       return <h1>{message}</h1>;
     }
 
     return this.props.children; 
   }
 }