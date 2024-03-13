import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useScrollToTop } from "./hooks/useScrollToTop";

const Home = lazy(() => import("./pages/home/home.jsx"));
const Profile = lazy(() => import("./pages/profile/profile.jsx"));
const Cart = lazy(() => import("./pages/cart/cart.jsx"));
const Favourite = lazy(() => import("./pages/favourite/favourite.jsx"));
const SingleCatalog = lazy(() => import("./pages/single-catalog/single-catalog.jsx"));
const ProductDetails = lazy(() => import("./pages/product-details/product-details.jsx"));
const Order = lazy(() => import("./pages/order/order.jsx"));

function App() {
  useScrollToTop();

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Suspense fallback={<h1>Loading...</h1>}>
          <MainLayout />
        </Suspense>}>
          <Route index element={
              <Home />
          } />
          <Route path="profile" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Profile />
            </Suspense>
          } />

          <Route path="cart" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Cart />
            </Suspense>
          } />
          <Route path="favourite" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Favourite />
            </Suspense>
          } />
          <Route path="category/:datakey" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <SingleCatalog />
            </Suspense>
          } />
          <Route path="products/:id" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <ProductDetails />
            </Suspense>
          } />
          <Route path="order" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Order />
            </Suspense>
          } />
        </Route>
      </Routes >
    </>
  );
}

export default App;
