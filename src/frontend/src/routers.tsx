import { createBrowserRouter } from "react-router-dom";
import { Users } from "./pages/users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
]);
