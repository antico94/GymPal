﻿import React, {useState} from 'react';
import "./login.css"
import $ from 'jquery'
import {API} from "../../containers/API";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch(API.LOGIN, {
            method: "POST",
            headers: {"Content-Type": "Application/json"}, body: JSON.stringify({email, password})
        });
        const content = await response.json();
        if (content.data.Name!== "") {
            LoginSuccess(content.data.Name)
            document.cookie = "jwt="+content.data.jwt
        } else LoginFailed();
    }


    const LoginSuccess = (_name) => {
        let title = $('#success-fail-title')
        title.text("Welcome " + _name + "!")
        title.css("color", "white")
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            document.cookie="userLoggedIn=true"
            window.location.href = "http://localhost:3000/"
        }, 500)
    }

    const LoginFailed = () => {
        let title = $('#success-fail-title')
        title.text("Invalid credentials!")
        title.css("color", "red")
    }


    return (<div className="login-page">
        <div className="wrapper">
            <div className="container">
                <h1 id="success-fail-title">Login</h1>

                <form className="form" onSubmit={onSubmitHandler}>
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"/>
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
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