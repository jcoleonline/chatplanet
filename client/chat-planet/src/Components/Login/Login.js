const Login = () => {
    return (
        <div className="login-form">
            <h1 className="title">Log In</h1>
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" />
            {!isLoggingIn && <>
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email"/>
            </>}
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" />
            <button type="submit">{isLoggingIn ? "Login" : "Register"}</button>
            <a>{isLoggingIn ? "Register" : "Login"}</a>
            {message && <p>{message}</p>}
        </div>
    )
}