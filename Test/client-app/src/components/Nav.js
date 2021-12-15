import '../App.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                <ul className="navbar-nav">
                    <li className="mav-item- m-1">
                        <Link to="/"><li className="btn btn-light btn-outline-primary">Home</li></Link>
                    </li>
                    <li className="mav-item- m-1">
                        <Link to="/muscle"><li className="btn btn-light btn-outline-primary">Muscle</li></Link>
                    </li>
                    <li className="mav-item- m-1">
                        <Link to="/exercise"><li className="btn btn-light btn-outline-primary" >Exercise</li></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;


// import '../App.css';
// import {Link} from "react-router-dom";
//
// function Nav() {
//     return (
//         <div>
//             <nav>
//                 <Link to="/">
//                     <h3>Home</h3>
//                 </Link>
//                 <ul className="nav-links">
//                     <li>
//                         <Link to="/muscle"><li>muscle</li></Link>
//                         <Link to="/exercise"><li>exercise</li></Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }
//
// export default Nav;
