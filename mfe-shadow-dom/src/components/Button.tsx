import { ArrowLeft, ArrowRight } from "lucide-react";
import { FunctionComponent } from "react";
import { createRoot } from "react-dom/client";
import { defineWebComponent } from "~/utils/defineWebComponent";
import { PropSchema } from "~/utils/schemaTransformer/types";
import { WebComponentBase } from "~/utils/webComponentBase";
import css from "./styles.css?inline";

type ButtonIcon = "arrow_right" | "arrow_left";

type ButtonProps = {
  text: string;
  icon?: ButtonIcon;
};

export function Button(props: ButtonProps) {
  function getCurrentIcon() {
    const icons: Record<ButtonIcon, FunctionComponent> = {
      arrow_left: ArrowLeft,
      arrow_right: ArrowRight,
    };

    if (props.icon) {
      return icons[props.icon] ?? null;
    }

    return null;
  }

  const Icon = getCurrentIcon();

  return (
    <>
      {/* Opção 1 para estilização */}
      <style mfe-1>{css}</style>
      <button className="bg-red">
        {props.text} {Icon && <Icon />}
      </button>
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
    {
      name: "icon",
      type: "string",
      required: false,
    },
  ];

  render() {
    const root = createRoot(this.shadow);
    const props = this.getProps();

    root.render(<Button {...props} />);
  }
}

defineWebComponent("button-mfe", Component);
