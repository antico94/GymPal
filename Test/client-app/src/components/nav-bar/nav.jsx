import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import "./nav.css"
import logo from "../../assets/svg/logoGym.svg"
import {getCookie} from "../../containers/utility";
import Logout from "../../Pages/Login&Register&Logout/logout";


const TestNav = (props) => {
    if (props.userLoggedIn === true) {
        return (<nav className="navbar">
                <div className="container">
                    <Link to="/">
                        <a href="#">
                            <img
                                src={logo}
                                alt="apple-logo"
                                className="logo"
                            />
                        </a>
                    </Link>
                    <ul className="nav">
                        <li><Link to="/profile"><a>Profile</a></Link></li>
                        <li><Link to="/workout"><a>Workout</a></Link></li>
                        <li><Link to="/admin/muscles"><a>Muscle</a></Link></li>
                        <li><Link to="/admin/exercises"><a>Exercises</a></Link></li>
                        <li><Link to="/DisplayMuscle"><a>Muscle Selector</a></Link></li>
                        <li><a onClick={Logout} href="/">Log Out</a></li>
                    </ul>
                </div>
            </nav>

        )
    } else {
        return (<nav className="navbar">
                <div className="container">
                    <Link to="/">
                        <a href="#">
                            <img
                                src={logo}
                                alt="apple-logo"
                                className="logo"
                            />
                        </a>
                    </Link>
                    <ul className="nav">
                        <li><Link to="/profile"><a>Profile</a></Link></li>
                        <li><Link to="/admin/muscles"><a>Muscle</a></Link></li>
                        <li><Link to="/admin/exercises"><a>Exercises</a></Link></li>
                        <li><Link to="/DisplayMuscle"><a>Muscle Selector</a></Link></li>
                        <li><Link to="/login"><a>Login</a></Link></li>
                        <li><Link to="/register"><a>Register</a></Link></li>
                    </ul>
                </div>
            </nav>

        )
    }
}
export default TestNav;