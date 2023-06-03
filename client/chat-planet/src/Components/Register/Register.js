import Navbar from "../Navbar/Navbar";
import './Register.css';
import logo from '../../image/Colorful Infinite Logo Design (500 × 400 px).png'
import RegisterButton from "./Register-button/Register-button";

const Register = () => {
    return (
        <div className="container">
            <div className="login-container">
            <img src={logo} alt="logo" className="logo-image"/>
            <form className="form-login">
                <input className='email-input' type="text" placeholder="email"></input>
                <input className='password-input' type="password" placeholder="create password" ></input>
                <input className='password-input' type="password" placeholder="confirm password" ></input>
            </form>
            <RegisterButton className='register-button' />
                        </div>
        </div>
    )
};

export default Register;