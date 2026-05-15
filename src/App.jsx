import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Info from "./pages/Info";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetails from "./pages/ProductDetails";

import LangProvider from "./context/LanguageProvider";
import useLang from "./context/useLang";

import {CartProvider} from "./context/CartContext"
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Products", element: <Products /> },
      { path: "Products/:id", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/Info", element: <Info /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

// 👇 component جوّه الـ Provider
function AppContent() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return <RouterProvider router={router} />;
}

function App() {
  return (
   <LangProvider>
    <CartProvider>
      <AppContent />
      </CartProvider>
   </LangProvider>
  );
}

export default App;
