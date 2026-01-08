import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
