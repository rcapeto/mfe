import ReactDOM from "react-dom/client";
import "../../index.css";

const webComponent = "mfe1-card";

type CardProps = {
  href?: string;
};

export default function Card({ href = "" }: CardProps) {
  console.log("MFE-1 Card href", { href })

  function onCardClick() {
    if (!href) {
      return;
    }

    window.location.href = href;
  }

  return (
    <div className="card-container" onClick={onCardClick} role="button">
      <p className="text">
        <strong>NAME:</strong> #mfe-1
      </p>
      <p className="text">
        <strong>TECH:</strong> #React
      </p>
    </div>
  );
}

class Mfe1Card extends HTMLElement {
  getHref() {
    const attribute = this.getAttribute('href')

    return attribute ?? ''
  }

  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    const href = this.getHref()

    console.log(`Custom element call ${webComponent} to page.`);
    root.render(<Card href={href} />);
  }
}

customElements.define(webComponent, Mfe1Card);
