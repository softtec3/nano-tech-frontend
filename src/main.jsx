import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import LangContextProvider from "./contexts/LangContext/LangContextProvider";
import CartContextProvider from "./contexts/CartContext/CartContextProvider";
import { Toaster } from "react-hot-toast";
import LoaderContextProvider from "./contexts/LoaderContext/LoaderContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderContextProvider>
      <CartContextProvider>
        <LangContextProvider>
          <RouterProvider router={router} />
        </LangContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </CartContextProvider>
    </LoaderContextProvider>
  </StrictMode>
);
