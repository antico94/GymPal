import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TestNav from "./components/alternative-nav/nav";
import React from "react";
import Login from "./Pages/Login&Register/Login";
import Register from "./Pages/Login&Register/Register";
import {AdminExercise, AdminMuscle, Profile, DisplayMuscles, Homepage} from "./Pages";


function App() {

    return (<Router>
        <div className="App">
            <TestNav/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/DisplayMuscle" element={<DisplayMuscles/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                
                <Route path="/admin/muscles" element={<AdminMuscle/>}/>
                <Route path="/admin/exercises" element={<AdminExercise/>}/>
            </Routes>
        </div>
    </Router>);
}

export default App;