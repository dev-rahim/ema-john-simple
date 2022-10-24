import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route exact path='/shop' element={<Products />} />
          <Route exact path='/review' element={<OrderReview />} />
          <Route exact path='/inventory' element={<Inventory />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Products /> */}
    </div>
  );
}

export default App;
