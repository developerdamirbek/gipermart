import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home/home"
import { Profile } from "./pages/profile"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from "./pages/cart"
import { Favourite } from "./pages/favourite"
import { SingleCatalog } from "./pages/single-catalog/single-catalog"
import { ProductDetails } from "./pages/product-details/product-details"
import { useScrollToTop } from "./hooks/useScrollToTop"

function App() {
  useScrollToTop()

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/category/:datakey" element={<SingleCatalog/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
        </Route>
      </Routes>
    </>
  )
}

// {pages?.map((item) => (
//   <Route key={item.id} index={!item.path ? true : false} path={item.path} component={item.component} />
// ))}

export default App
