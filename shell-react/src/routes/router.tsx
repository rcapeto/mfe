import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Mfe1Routes } from "../microfrontends/mfe1";
import { Mfe2Router } from "../microfrontends/mfe2/Router";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="mfe2/*" element={<Mfe2Router />}/>
      </Routes>
      <Mfe1Routes baseUrl="teste" />
    </BrowserRouter>
  );
}
