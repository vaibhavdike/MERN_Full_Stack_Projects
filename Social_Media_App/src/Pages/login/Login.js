import './login.css';
import {AuthContext} from '../../context/AuthContext'
import { useContext, useRef } from 'react'
import { loginCall } from '../../apiCalls';
import {CircularProgress } from '@mui/material';
export default function Login() {
  const {user,isFetching ,error,dispatch}=useContext(AuthContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch);
  }
  console.log(user);
  const email = useRef();
  const password = useRef();
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
          <form className="loginBox" onSubmit={handlesubmit}>
            <input className='loginInput' type="email" placeholder='Email' require ref={email} />
            <input className='loginInput' type="Password" placeholder='Password' require minLength="6" ref={password} />
            <button className="loginButton" disabled={isFetching}>{ isFetching ? <CircularProgress style={{color:"white"}} /> : "Log in"}</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">{ isFetching ? <CircularProgress style={{color:"white"}} /> : "Create a New Account"}</button>
          </form>
        </div>
      </div>

    </div>
  )
}
