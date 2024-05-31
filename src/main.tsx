import ReactDOM from "react-dom/client";
import "@/assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { ThemeProvider } from "./components/ThemeProvider";
import "@/utils/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="theme">
    <RouterProvider router={router} />
  </ThemeProvider>,
);
