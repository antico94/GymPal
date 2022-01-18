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

            // <ul className="navbar-nav">
            //     <li className="mav-item- m-1">
            //         <Link to="/">
            //             <h5 className="btn btn-light btn-outline-primary">Home</h5>
            //         </Link>
            //     </li>
            //     <li className="mav-item- m-1">
            //         <Link to="/admin/muscles">
            //             <h5 className="btn btn-light btn-outline-primary">Muscle</h5>
            //         </Link>
            //     </li>
            //     <li className="mav-item- m-1">
            //         <Link to="/admin/exercises">
            //             <h5 className="btn btn-light btn-outline-primary">Exercise</h5>
            //         </Link>
            //     </li>
            //     <li className="mav-item- m-1">
            //         <Link to="/DisplayMuscle">
            //             <h5 className="btn btn-light btn-outline-primary">Muscle Selector</h5>
            //         </Link>
            //     </li>
            // </ul>
        )
    }
}

export default TestNav;