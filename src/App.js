import 'bootstrap/dist/css/bootstrap.min.css';
import { NotFound } from 'http-errors';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';
import TrackOrder from './components/TrackOrder/TrackOrder';

const App = () => {
  const [allProduct, setAllProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState(0);

  // load data from api
  useEffect(() => {
    fetch('./healthmedico.json')
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  //make a flat array of the fake json
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

    setItem(item + 1);
  };

  return (
    <div>
      <Router>
        <Header item={item} />
        <Switch>
          <Route exact path="/home">
            <Home allProduct={allProduct} handleCart={handleCart} />
          </Route>
          <Route exact path="/products">
            <Products allProduct={allProduct} handleCart={handleCart} />
          </Route>
          <Route exact path="/track-order">
            <TrackOrder />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home allProduct={allProduct} handleCart={handleCart} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
