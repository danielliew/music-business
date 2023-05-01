import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Merch from "./Merch";
import { merchUrl } from "./WillieDeanTrioApp.constants";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: merchUrl,
    element: <Merch />,
  },
]);

function WillieDeanTrioApp() {
  return <RouterProvider router={router} />;
}

export default WillieDeanTrioApp;
