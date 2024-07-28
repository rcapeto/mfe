import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./routes";

const webComponent = "mfe1-router";

type RouterProps = {
  baseUrl?: string;
};

export default function Router({ baseUrl = "" }: RouterProps) {
  console.log("MFE-1 Router baseURL", { baseUrl })

  return (
    <BrowserRouter basename={baseUrl}>
      <ApplicationRoutes />
    </BrowserRouter>
  );
}

class Mfe1Router extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    const baseUrl = this.getBaseUrl();

    console.log(`Custom element call ${webComponent} to page.`);
    root.render(<Router baseUrl={baseUrl}/>);
  }

  getBaseUrl() {
    const attribute = this.getAttribute("baseUrl");
    return attribute ?? "";
  }
}

customElements.define(webComponent, Mfe1Router);
