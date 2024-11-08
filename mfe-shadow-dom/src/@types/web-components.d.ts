import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "button-mfe": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
