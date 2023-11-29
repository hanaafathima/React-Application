// import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navigator from './Navigator';
import ContactHome from './ContactHome';
import Cart from './Cart';
import Contact from './Contact';
import KidBoys from './KidBoys';
import KidGirls from './KidGirls';
import GirlsSkirts from './GirlsSkirts';
import GirlsTops from './GirlsTops';
import GirlsEthnic from './GirlsEthnic';
import GirlsJeans from './GirlsJeans';
import BoysTshirts from './BoysTshirts';
import BoysEthnic from './BoysEthnic';
import BoysShirts from './BoysShirts';
import BoysJeans from './BoysJeans';
import WildCard from './WildCard';
import SignUp from './SignUp';
import Login from './Login';
import Order from './Order';
import Payment from './Payment';

function App() {
  return (
    <div>
        <BrowserRouter> 
        <Navigator/>
        <Routes>
          <Route  path= "ContactHome" element= {<ContactHome/>}></Route>
          <Route  path= "KidBoys" element= {<KidBoys/>}></Route>
          <Route  path= "BoysTshirts" element= {<BoysTshirts/>}></Route>
          <Route  path= "BoysShirts" element= {<BoysShirts/>}></Route>
          <Route  path= "BoysEthnic" element= {<BoysEthnic/>}></Route>
          <Route  path= "BoysJeans" element= {<BoysJeans/>}></Route>
          <Route  path= "KidGirls" element= {<KidGirls/>}></Route>
          <Route  path= "GirlsSkirts" element= {<GirlsSkirts/>}></Route>
          <Route  path= "GirlsEthnic" element= {<GirlsEthnic/>}></Route>
          <Route  path= "GirlsJeans" element= {<GirlsJeans/>}></Route>
          <Route  path= "GirlsTops" element= {<GirlsTops/>}></Route>
          <Route path= "Contact" element= {<Contact/>}></Route>
          <Route path= "Login" element= {<Login/>}></Route>    
          <Route path= "Login/SignUp" element= {<SignUp/>}></Route>  
          <Route path="Payment" element= {<Payment/>}></Route>
          <Route path= "Cart" element= {<Cart/>}></Route>
          <Route path="Cart/Order" element={<Order/>}></Route>
          <Route path= '/' element={<ContactHome/>}></Route>
          <Route path= '/*' element={<WildCard/>}></Route>
        </Routes>

        </BrowserRouter>
       
    </div>
  );
}

export default App;
