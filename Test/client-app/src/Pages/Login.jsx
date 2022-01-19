import React from 'react';
import "./login.css"

const Login = () => {

    return (
        <div className="login-page">
            <div className="wrapper">
                <div className="container">
                    <h1>Login</h1>

                    <form className="form">
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button type="submit" id="login-button">Login</button>
                    </form>
                </div>

                <ul className="bg-bubbles">
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                </ul>
            </div>
        </div>)
}
export default Login