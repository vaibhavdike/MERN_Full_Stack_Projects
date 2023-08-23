import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Profile from './Pages/profile/Profile';
import {
BrowserRouter as  Router,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  return (
    <Router>
   
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
   
  </Router>
);
    
    
   
  
}

export default App;
