import './App.css';
import {DisplayMuscle} from './components';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./components/homepage/Home";
import TestNav from "./components/alternative-nav/nav";
import React from "react";
import Login from "./Pages/Login&Register/Login";
import Register from "./Pages/Login&Register/Register";
import {AdminExercise, AdminMuscle} from "./Pages";


function App() {

    return (<Router>
        <div className="App">
            <TestNav/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/DisplayMuscle" element={<DisplayMuscle/>}/>
                
                <Route path="/admin/muscles" element={<AdminMuscle/>}/>
                <Route path="/admin/exercises" element={<AdminExercise/>}/>
            </Routes>
        </div>
    </Router>);
}

export default App;