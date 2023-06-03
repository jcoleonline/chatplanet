import './Login.css';
import logo from '../../image/Colorful Infinite Logo Design (500 × 400 px).png'
import LoginButton from './Login-button/Login-button';

const Login = () => {
    return (
        <div className="container">
            <div className="login-container">
            <img src={logo} alt="logo" className="logo-image"/>
            <form className="form-login">
                <input className='email-input' type="text" placeholder="email"></input>
                <input className='password-input' type="password" placeholder="password" ></input>
            </form>
            <LoginButton className='login-button' />
                        </div>
        </div>
    )
};

export default Login;