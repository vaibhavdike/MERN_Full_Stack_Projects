import './login.css';

export default function Login() {
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
                <div className="loginBox">
                    <input className='loginInput' placeholder='Email' />
                    <input className='loginInput' placeholder='Password' />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
