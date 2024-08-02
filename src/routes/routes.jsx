import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/error/Error";
import Consultation from "../components/consultation/Consultation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "consultation",
    element: <Consultation />
  }

]);
