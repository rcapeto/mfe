import { useNavigate } from "react-router-dom";
import "../index.css";
import { getPath } from "../utils/getPath";
import { PageProps } from "./types";

export default function Page1({ baseUrl = "" }: PageProps) {
  const navigate = useNavigate();

  function onBtnClick() {
    const path = getPath(baseUrl, "page2");
    navigate(path);
  }

  function goBack() {
    window.history.back();
  }

  return (
    <div className="page-container">
      <p className="text">Página 1 do mfe 1</p>

      <div className="flex">
        <button onClick={onBtnClick} className="button">
          Ir para página 2
        </button>

        <button className="button" onClick={goBack}>
          voltar
        </button>
      </div>
    </div>
  );
}
