import 'bootstrap/dist/css/bootstrap.min.css';
import { NotFound } from 'http-errors';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';
import TrackOrder from './components/TrackOrder/TrackOrder';

const App = () => {
  const [allProduct, setAllProduct] = useState({});
  // load data from api
  useEffect(() => {
    fetch('./healthmedico.json')
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home allProduct={allProduct} />
          </Route>
          <Route exact path="/products">
            <Products allProduct={allProduct} />
          </Route>
          <Route exact path="/track-order">
            <TrackOrder />
          </Route>
          <Route exact path="/track-order">
            <TrackOrder />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home allProduct={allProduct} />
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
