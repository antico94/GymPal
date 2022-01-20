import React from "react"
import {Component} from "react";
import {Link} from "react-router-dom";
import "./nav.css"
import logo from "../../assets/svg/logoGym.svg"


class TestNav extends Component {
    render() {
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
                        {/*<div className="button-container">*/}
                        {/*    <div className='button -dark center'>Login/Register</div>*/}
                        {/*</div>*/}
                    </ul>
                </div>
            </nav>

        )
    }
}

export default TestNav;