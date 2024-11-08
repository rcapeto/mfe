/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createElement,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { loadScript, ScriptType } from "~/utils/loadScript";
import { waitCustomElementDefine } from "./waitCustomElementDefine";

type Config = {
  tagName: string;
  timeout?: number;
  src: string;
  type?: ScriptType;
  loaderElement?: FunctionComponent<void>;
  errorElement?: (
    errorMessage: string,
    tagName: string
  ) => ReactNode | ReactNode;
  onLoaded?: () => void;
  onSuccess?: () => void;
  onError?: (errorMessage: string) => void;
};

export function loadWebComponent<ComponentProps>({
  src,
  tagName,
  loaderElement,
  errorElement,
  onError,
  onSuccess,
  onLoaded,
  timeout,
  type,
}: Config) {
  function ReactComponent(props: ComponentProps) {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function loadAsync() {
      try {
        setLoading(true);

        await loadScript(src, type);
        await waitCustomElementDefine(tagName, timeout);
        onSuccess?.();
      } catch (err) {
        const message =
          (err as Error)?.message ||
          `loadWebComponent: Erro ao carregar o webComponent "${tagName}", verifique os logs.`;

        console.error(`loadWebComponent error: [${tagName}]`, err);

        setErrorMessage(message);
        onError?.(message);
      } finally {
        setLoading(false);
        onLoaded?.();
      }
    }

    useEffect(() => {
      loadAsync();
    }, []);

    if (loading) {
      return loaderElement?.() || null;
    }

    if (errorMessage) {
      if (typeof errorElement === "function") {
        return errorElement(errorMessage, tagName);
      }

      return errorElement || null;
    }

    return createElement(tagName, {
      ...(props as any),
    });
  }

  return ReactComponent as FunctionComponent<ComponentProps>;
}
