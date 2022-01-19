import React, {useState} from 'react';
import "./login.css"
import $ from 'jquery'
import {variables as API} from "../containers/Variables";
import {Navigate, Redirect} from 'react-router-dom'


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch(API.REGISTER, {
            method: "POST", headers: {"Content-Type": "Application/json"}, body: JSON.stringify({name, email, password})
        });
        const content = await response.json();
        if (content.Name !== undefined) {
            RegisterSuccess(content.Name)
        } else RegisterFailed();
    }

    const RegisterSuccess = (_name) => {
        let title = $('#register-title')
        title.text("Account created successfully!")
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            window.location.href = "http://localhost:3000/login"
        }, 1500)
    }

    const RegisterFailed = () => {
        let title = $('#register-title')
        title.text("There is already an account with this email.");
    }


    return (<div className="login-page">
        <div className="wrapper">
            <div className="container">
                <h1 id="register-title">Register</h1>
                <form className="form" onSubmit={onSubmitHandler}>
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="Name"/>
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"/>
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    <button type="submit" id="register-button">Register</button>
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
export default Register