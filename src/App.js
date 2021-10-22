import 'bootstrap/dist/css/bootstrap.min.css';
import { NotFound } from 'http-errors';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import SingleProductDetails from './components/SingleProductDetalis/SingleProductDetails';
import { AuthProvider } from './context/AuthProvider';
import useProducts from './hooks/useProducts';

const App = () => {
  const [allProduct] = useProducts();
  const [cart, setCart] = useState([]);
  const [totalItem, setTotalItem] = useState(0);

  //make a flat array of the fake json data
  const makeFlatArr = () => {
    const arr = [];
    for (const product in allProduct) {
      arr.push(allProduct[product]);
    }

    return arr.flat();
  };

  const handleCart = (id) => {
    let productArr = makeFlatArr();
    let addedProducts = productArr.find((product) => product.id === id);

    if (cart.find((item) => item.id === id)) {
      const cartCopy = [...cart];
      const duplicateItem = cartCopy.find(
        (item) => item.id === addedProducts.id
      );
      duplicateItem.quantity++;
      setCart(cartCopy);
    } else {
      addedProducts.quantity = 1;
      setCart([...cart, addedProducts]);
    }

    setTotalItem(totalItem + 1);
  };

  return (
    <div>
      <AuthProvider>
        <Router>
          <Header totalItem={totalItem} />
          <Switch>
            <Route exact path="/home">
              <Home allProduct={allProduct} handleCart={handleCart} />
            </Route>

            <Route exact path="/products">
              <Products allProduct={allProduct} handleCart={handleCart} />
            </Route>

            <PrivateRoute exact path="/shipping">
              <Shipping />
            </PrivateRoute>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/cart">
              <Cart cart={cart} totalItem={totalItem} />
            </Route>

            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/">
              <Home allProduct={allProduct} handleCart={handleCart} />
            </Route>

            <PrivateRoute exact path="/single-product/:itemId">
              <SingleProductDetails handleCart={handleCart} />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
