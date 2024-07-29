import { useEffect, useState } from "react";
import { withSuspense } from "../../hocs/withSuspense";

function Card() {
  const [hasError, setHasError] = useState(false);

  function loadModule() {
    import("miniShellAngular/CardWebComponent")
      .then((module) => {
        setHasError(false);
        module?.default?.();
      })
      .catch(() => {
        setHasError(true);
      });
  }

  useEffect(() => {
    loadModule();
  }, []);

  if (hasError) {
    return <p>Erro ao renderizar o card do mini-shell-angular</p>;
  }

  return (
    <mini-shell-angular-card
      hrefMfe1Card="mfe1/page1"
      hrefMfe2Card="mfe2/page1"
    />
  );
}

export const MiniShellAngularCard = withSuspense()(Card);
