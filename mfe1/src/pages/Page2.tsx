import { useNavigate } from "react-router-dom";
import "../index.css";
import { getPath } from "../utils/getPath";

type PageProps = {
  baseUrl?: string;
};

export default function Page2({ baseUrl = "" }: PageProps) {
  const navigate = useNavigate();

  function onBtnClick() {
    const path = getPath(baseUrl, "page1");
    navigate(path);
  }

  return (
    <div className="page-container">
      <p className="text">Página 2 do mfe 1</p>

      <div className="flex">
        <button onClick={onBtnClick} className="button">
          Ir para página 1
        </button>
      </div>
    </div>
  );
}
