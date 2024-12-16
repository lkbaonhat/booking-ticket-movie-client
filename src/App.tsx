import "./App.css";
//Route
import { ROUTES } from "./routes";
//Library
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Component
import NotFoundPages from "@pages/NotFoundPages";
import HomeTemplate from "./templates/HomeTemplate";
import HomePages from "./pages/HomePages";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPages />,
  },
  {
    path: ROUTES.HOME,
    element: <HomeTemplate Component={HomePages} />,
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
