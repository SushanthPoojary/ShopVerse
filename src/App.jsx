import { useEffect, useState } from 'react';
import './App.css'
import Layout from './Layout';
import HomePage from './pages/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { productLists } from './lib/dummyData';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './features/product/productSlice';

function App() {

  // const [cartItems, setCartItems] = useState([]);
  // const [products, setProducts] = useState(productLists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(productLists));
  }, [dispatch]);

  // const products = useSelector((state) => state.products.products);

  // return (
  //   // <div className="App">
  //   //   <HomePage />
  //   // </div>
  // )

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
