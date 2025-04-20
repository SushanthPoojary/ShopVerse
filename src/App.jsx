import { useState } from 'react';
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

function App() {

  // const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(productLists);

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
          element: <HomePage products={products} />,
        },
        {
          path: "/products",
          element: <ProductsPage products={products} />
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
