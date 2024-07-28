import ReactDOM from "react-dom/client";
import "../index.css";
import { Mfe1Card } from "../microfrontends/mfe1";
import { Mfe2Card } from "../microfrontends/mfe2/Card";

const webComponent = "mini-shell-react";

type CardProps = {
  hrefMfe1Card?: string;
  hrefMfe2Card?: string;
};

export default function Card({ hrefMfe1Card, hrefMfe2Card }: CardProps) {
  return (
    <div className="card-container mini-shell-react-bg">
      <p className="text">
        <strong>NAME:</strong> #mini-shell-react
      </p>
      <p className="text">
        <strong>TECH:</strong> #React
      </p>

      <div className="padding">
        <Mfe1Card href={hrefMfe1Card} />
        <Mfe2Card href={hrefMfe2Card} />
      </div>
    </div>
  );
}

class MiniShellReactCard extends HTMLElement {
  getProps() {
    return {
      hrefMfe1Card: this.getAttribute("hrefMfe1Card") ?? "",
      hrefMfe2Card: this.getAttribute("hrefMfe2Card") ?? "",
    };
  }

  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    const props = this.getProps();

    console.log(`Custom element call ${webComponent} to page.`);
    root.render(<Card {...props} />);
  }
}

customElements.define(webComponent, MiniShellReactCard);
