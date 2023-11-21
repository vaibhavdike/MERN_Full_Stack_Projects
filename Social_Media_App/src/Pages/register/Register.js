import './register.css';
import axios from "axios";
import {useRef} from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';


export default function Register() {
  


 
  const username=useRef();
  const email=useRef();
  const password=useRef();
  const passwordAgain=useRef();
  const navigate = useNavigate();
 


  
  const handleClick=async(e)=>{
      e.preventDefault();
     
    if(password.current.value !== passwordAgain.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match!")
    }else{
      const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      }
      try{
      await axios.post("http://localhost:8000/api/auth/register",user);
      navigate("/login");
      }catch(err){
        console.log(err);
      }
    }
  }
  return (
    
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
          <h3 className="loginLogo">Vabsocial</h3>
          <span className="loginDesc">
            Connect with friends and world around you on Vabsocial.
          </span>
            </div>
            <div className="LoginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input className='loginInput' required ref={username} placeholder='Username'  />
                    <input className='loginInput' required ref={email} placeholder='Email' type='email' />
                    <input className='loginInput' required ref={password} placeholder='Password' type='password' minLength="6" />
                    <input className='loginInput' required ref={passwordAgain} placeholder='Re-Enter Password' type='password' />
                    <button className="loginButton" type="submit">Sign Up</button>
                   <Link to="/login" style={{textDecoration:"none" , width: "100%", display: 'flex', justifyContent: 'center' }}>  <button className="loginRegisterButton">Log into Account</button> </Link>
 
                </form>
            </div>
        </div>
      
    </div>
  )

}