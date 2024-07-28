import { FunctionComponent, Suspense } from "react";

type Config = {
  loadingMessage?: string;
};

export function withSuspense<Props extends object>({
  loadingMessage = "Carregando...",
}: Config = {}) {
  return (WrappedComponent: FunctionComponent<Props>) => {
    return (props: Props) => {
      return (
        <Suspense fallback={<p>{loadingMessage}</p>}>
          <WrappedComponent {...props} />
        </Suspense>
      );
    };
  };
}
