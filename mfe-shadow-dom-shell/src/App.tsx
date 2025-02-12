import { loadWebComponent } from "~/utils/loadWebComponent";

type ButtonProps = {
  text: string;
  icon?: "arrow_left" | "arrow_right";
};

const path = "my-mfe.js";

const ButtonMfe = loadWebComponent<ButtonProps>({
  src: `http://localhost:5002/assets/${path}`,
  tagName: "button-mfe",
  loaderElement: () => <p>Carregando</p>,
  errorElement: (message, tag) => (
    <div>
      <p>Error message: {message}</p>
      <p>Tagname: {tag}</p>
    </div>
  ),
});

export function App() {
  return (
    <div>
      <h1>Estou aqui no Shell</h1>

      <button className="bg-red">Esse botão está no shell</button>

      <ButtonMfe text="botão MFE shadow" icon="arrow_right" />
    </div>
  );
}
