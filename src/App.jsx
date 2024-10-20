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

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct.jsx';
import { loader as productLoader } from './pages/Products.jsx';

import { ErrorElement } from './components';

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
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <Error />,
    },
]);


const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
