import { FunctionComponent } from 'react'
import { ErrorBoundary } from "../components/ErrorBoundary"

type Config = {
   errorMessage?: string,
}

export function withErrorBoundary<Props extends object>({ errorMessage }: Config = {}) {
   return (WrappedComponent: FunctionComponent<Props>) => {
      return (props: Props) => {
         return(
            <ErrorBoundary errorMessage={errorMessage}>
               <WrappedComponent {...props}/>
            </ErrorBoundary>
         )
      }
   }
}