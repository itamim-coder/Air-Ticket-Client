
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Admin from './Pages/Admin/Admin';
import Booking from './Pages/Booking/Booking';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Foooter/Footer';

import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
   <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/login">         
         <Login></Login>
       </Route>
       <PrivateRoute path="/admin">         
         <Admin></Admin>
       </PrivateRoute>
       <PrivateRoute path="/booking/:serviceId">
       <Booking></Booking>
       </PrivateRoute>
     </Switch>
     <Footer></Footer>
   </Router>
      </AuthProvider>
    
   
 
    </div>
  );
}

export default App;
