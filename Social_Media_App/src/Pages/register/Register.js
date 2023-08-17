import './register.css';

export default function Register() {
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
                    <input className='loginInput' placeholder='Username' />
                    <input className='loginInput' placeholder='Email' />
                    <input className='loginInput' placeholder='Password' />
                    <input className='loginInput' placeholder='Re-Enter Password' />
                    <button className="loginButton">Sign Up</button>
                  
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
