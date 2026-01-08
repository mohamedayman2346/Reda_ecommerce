import { Route, Routes } from "react-router-dom";
import Bottomheader from "./components/header/Bottomheader";
import Topheader from "./components/header/Topheader";
import Home from "./page/Home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "motion/react";
import CategoryPage from "./page/categoryPage/CategoryPage";
import PageResults from "./page/PageResults";
import Favorits from "./page/favorites/Favorits";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 z-10 right-0 bg-white">
        <Topheader />
        <Bottomheader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />

      <ScrollToTop />

      {/* change page controll */}
      <AnimatePresence mode = 'wait'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorits />} />
          <Route path="/search" element={<PageResults />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
