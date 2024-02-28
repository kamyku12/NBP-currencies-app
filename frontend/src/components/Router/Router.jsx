import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "../../pages/welcome";
import Balance from "../../pages/balance";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "balance",
      element: <Balance />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
