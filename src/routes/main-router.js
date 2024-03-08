import { Cart } from "../pages/cart";
import { Favourite } from "../pages/favourite";
import { Home } from "../pages/home/home";
import { ProductDetails } from "../pages/product-details/product-details";
import { Profile } from "../pages/profile";
import { SingleCatalog } from "../pages/single-catalog/single-catalog";

export const pages = [
    {
        id: 1,
        component: Home,
    },
    {
        id: 2,
        component: Profile,
        path: "/profile"
    },
    {
        id: 3,
        component: Favourite,
        path: "/favourite"
    },
    {
        id: 4,
        component: SingleCatalog,
        path: "/category/:datakey"
    },
    {
        id: 5,
        component: ProductDetails,
        path: "/products/:id"
    },
    {
        id: 6,
        component: Cart,
        path: "/cart"
    }
]