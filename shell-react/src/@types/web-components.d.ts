import * as React from 'react';

type WebComponent<Props = object> = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & Props, HTMLElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-mfe2-root': WebComponent,
      'mini-shell-angular-card': WebComponent<{
        hrefMfe1Card: string,
        hrefMfe2Card: string,
      }>
    }
  }
}