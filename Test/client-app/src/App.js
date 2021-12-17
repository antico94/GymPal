import './App.css';
import {Home} from "./components/Home";
import {Exercise} from "./components/Exercise";
import {Muscle} from "./components/Muscle";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import {DisplayMuscle} from "./components/DisplayMuscle";

function App() {
    
    return (
        <Router>
            <div className="App container">
                <Nav/>
                <Routes>
                    <Route path="/muscle" element={<Muscle/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/DisplayMuscle" element={<DisplayMuscle/>}/>
                    <Route path="/exercise" element={<Exercise/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;