import { Route, Routes } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import { getPath } from "../utils/getPath";

type RoutesProps = {
  baseUrl?: string;
};

export default function ApplicationRoutes({ baseUrl = "" }: RoutesProps) {
  const routes = [
    { path: getPath(baseUrl, "page1"), element: <Page1 baseUrl={baseUrl} /> },
    { path: getPath(baseUrl, "page2"), element: <Page2 baseUrl={baseUrl} /> },
  ];

  console.log("MFE-1 Routes", { baseUrl, routes })

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          element={route.element}
          key={index.toString()}
        />
      ))}
    </Routes>
  );
}
