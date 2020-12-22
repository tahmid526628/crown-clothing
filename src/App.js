import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop_page.component';

// let's say
const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
