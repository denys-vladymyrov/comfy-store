import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
    About,
    Cart,
    Checkout,
    Error,
    HomeLayout,
    Landing,
    Login,
    Orders,
    Products,
    Register,
    SingleProduct,
} from './pages';
import { ErrorElement } from './components';

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productLoader } from './pages/Products';
import { loader as checkoutLoader } from './pages/Checkout';

import { action as registerAction } from './pages/Register';
import { action as LoginAction } from './pages/Login';

import { store } from './store/store';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorElement />,
                loader: landingLoader,
            },
            {
                path: 'products',
                element: <Products />,
                errorElement: <ErrorElement />,
                loader: productLoader,
            },
            {
                path: 'products/:id',
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
                loader: singleProductLoader,
            },
            {
                path: 'cart',
                element: <Cart />,
                errorElement: <ErrorElement />,
            },
            {
                path: 'about',
                element: <About/>,
                errorElement: <ErrorElement/>,
            },
            {
                path: 'checkout',
                element: <Checkout />,
                errorElement: <ErrorElement />,
                loader: checkoutLoader(store),
            },
            {
                path: 'orders',
                element: <Orders />,
                errorElement: <ErrorElement />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
        action: LoginAction(store),
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <Error />,
        action: registerAction,
    },
]);


const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
