import * as React from 'react';

type WebComponent<Props = object> = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & Props, HTMLElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-root': WebComponent;
      'mfe2-card': WebComponent<{ href?: string }>,
      'app-mfe2-root': WebComponent,
    }
  }
}