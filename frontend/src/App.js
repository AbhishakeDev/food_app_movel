import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import MealScreen from './screens/MealScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/register' exact component={RegisterScreen} />
          <Route path='/' exact component={HomeScreen} />
          <Route path='/search/:keyword' exact component={HomeScreen} />
          <Route path='/hotel/:id' exact component={MealScreen} />
          <Route path='/cart/:id' exact component={CartScreen} />
          <Route path='/cart' exact component={CartScreen} />
          <Route path='/shipping' exact component={ShippingScreen} />
          <Route path='/payment' exact component={PaymentScreen} />
          <Route path='/placeorder' exact component={PlaceOrderScreen} />
          <Route path='/order/:id' exact component={OrderScreen} />
          <Route path='/profile' exact component={ProfileScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
