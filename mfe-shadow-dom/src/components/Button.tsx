import { createRoot } from "react-dom/client";
import { defineWebComponent } from "~/utils/defineWebComponent";
import { PropSchema } from "~/utils/schemaTransformer/types";
import { WebComponentBase } from "~/utils/webComponentBase";
import css from "./styles.css?inline";

type ButtonProps = {
  text: string;
};

export function Button(props: ButtonProps) {
  return (
    <>
      {/* Opção 1 para estilização */}
      <style mfe-1>{css}</style>
      <button className="bg-red">{props.text}</button>
    </>
  );
}

class Component extends WebComponentBase<ButtonProps> {
  shadow = this.attachShadow({ mode: "open" });

  css = css; // Opção 2 para estilização
  styles = ["style[mfe-1]"]; // Opção 3 para estilização

  attributesSchema?: PropSchema<ButtonProps>[] = [
    {
      name: "text",
      type: "string",
      required: true,
      defaultValue: "Empty Text Value",
    },
  ];

  render() {
    const root = createRoot(this.shadow);
    const props = this.getProps();

    root.render(<Button {...props} />);
  }
}

defineWebComponent("button-mfe", Component);
