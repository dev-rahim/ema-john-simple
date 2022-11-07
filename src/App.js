import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import AuthProvider, { AuthContext } from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route exact path='/shop' element={<Products />} />
            <Route exact path='/review' element={<OrderReview />} />
            <Route exact path='/inventory' element={<Inventory />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* <Products /> */}
      </ AuthProvider>
    </div>
  );
}

export default App;
