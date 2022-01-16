import './App.css';
import {
    Muscle,
    Exercise,
    Home,
    DisplayMuscle,
    NavBar,
} from './components';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
    
    return (
        <Router>
            <div className="App container">
                <NavBar/>
                <Routes>
                    <Route path="/admin/muscles" element={<Muscle/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/DisplayMuscle" element={<DisplayMuscle/>}/>
                    <Route path="/admin/exercises" element={<Exercise/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;