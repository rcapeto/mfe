import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Mfe1Routes } from "../microfrontends/mfe1";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Mfe1Routes baseUrl="teste" />
    </BrowserRouter>
  );
}
