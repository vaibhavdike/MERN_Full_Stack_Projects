import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Profile from './Pages/profile/Profile';
import {AuthContext} from "./context/AuthContext";
import {
BrowserRouter as  Router,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";
import { useContext } from 'react';
import Messenger from './Pages/messenger/Messenger';


function App() {
const {user}=useContext(AuthContext);
 return (

      <Router>
   
      <Routes>
        <Route exact path="/" element={user ? <Home/> :<Register/>}/>
        <Route exact path="/login" element={user ? <Navigate to="/"/>: <Login/>}/>
        <Route exact path="/register" element={user ? <Navigate to="/"/>: <Register/>}/>
        <Route exact  path="/messenger" element={!user ? <Navigate to="/"/>: <Messenger/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
   
  </Router>


);

    
    
   
  
}

export default App;
