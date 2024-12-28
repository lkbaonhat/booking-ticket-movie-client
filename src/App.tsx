import "./App.css";
//Route
import { ROUTES } from "./routes";
//Library
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Component
//--pages
import NotFoundPages from "@pages/NotFoundPages";
import HomePages from "@pages/HomePages";
import FilmDetailPages from "@pages/FilmDetailPages";
//--templates
import HomeTemplate from "@templates/HomeTemplate";
import CheckoutPages from "./pages/CheckoutPages";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPages />,
  },
  {
    path: ROUTES.HOME,
    element: <HomeTemplate Component={HomePages} />,
  },
  {
    path: ROUTES.DETAIL,
    element: <HomeTemplate Component={FilmDetailPages} />,
  },
  {
    path: ROUTES.CHECKOUT,
    element: <HomeTemplate Component={CheckoutPages} />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
