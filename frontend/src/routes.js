import { Home } from './pages/Home'
import { Bags } from './pages/Bags'
import { ContactUs } from './pages/ContactUs'
import { ShoppingCart } from './pages/ShoppingCart'
import { WishList } from './pages/WishList'

export const routes=[
    {
        path: '/',
        component: Bags,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/bags',
        component: Bags,
    },
    {
        path: '/contactUs',
        component: ContactUs,
    },
    {
        path: '/shoppingCart',
        component: ShoppingCart,
    },
    {
        path: '/wishList',
        component: WishList,
    },
]