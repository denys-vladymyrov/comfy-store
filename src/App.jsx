import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
import { loader as ordersLoader } from './pages/Orders';

import { action as registerAction } from './pages/Register';
import { action as LoginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';

import { store } from './store/store';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});

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
                loader: landingLoader(queryClient),
            },
            {
                path: 'products',
                element: <Products />,
                errorElement: <ErrorElement />,
                loader: productLoader(queryClient),
            },
            {
                path: 'products/:id',
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
                loader: singleProductLoader(queryClient),
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
                loader: checkoutLoader(store, queryClient),
                action: checkoutAction(store, queryClient),
            },
            {
                path: 'orders',
                element: <Orders />,
                errorElement: <ErrorElement />,
                loader: ordersLoader(store, queryClient),
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
    return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
};
export default App;
