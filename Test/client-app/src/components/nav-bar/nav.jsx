import React from "react"
import {Component} from "react";
import {Link} from "react-router-dom";
import "./nav.css"
import logo from "../../assets/svg/logoGym.svg"


class TestNav extends Component {
    render() {
        return (<nav className="navbar">
                <div className="container">
                    <a href="#">
                        <img
                            src={logo}
                            alt="apple-logo"
                            className="logo"
                        />
                    </a>
                    <ul className="nav">
                        <li>
                            <Link to="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li><Link to="/admin/muscles"><a>Muscle</a></Link></li>
                        <li><Link to="/admin/exercises"><a>Exercises</a></Link></li>
                        <li><Link to="/DisplayMuscle"><a>Muscle Selector</a></Link></li>
                        {/*<li className="search-full"><input type="text" placeholder="How can we help you?"/></li>*/}
                        {/*<li className="search-mobile"><a href="#"><img src="https://svgshare.com/i/L1v.svg"*/}
                        {/*                                               alt="magnifier" className="magnifier"/></a></li>*/}
                    </ul>
                </div>
            </nav>
            
        )
    }
}

export default TestNav;