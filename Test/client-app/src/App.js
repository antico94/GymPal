import './App.css';
import {
    Muscle,
    Exercise,
    RotatingWords,
    DisplayMuscle,
    NavBar,
} from './components';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./components/homepage/Home";
import TestNav from "./components/alternative-nav/nav";


function App() {

    return (
        <Router>
            <div className="App">
                {/*<NavBar/>*/}
                <TestNav/>
                <Routes>
                    <Route path="/admin/muscles" element={<Muscle/>}/>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/DisplayMuscle" element={<DisplayMuscle/>}/>
                    <Route path="/admin/exercises" element={<Exercise/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;