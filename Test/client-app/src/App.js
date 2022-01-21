import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Login from "./Pages/Login&Register/Login";
import Register from "./Pages/Login&Register/Register";
import {AdminExercise, AdminMuscle, Profile, DisplayMuscles, Homepage, HealthAndSafety, ExercisesResult} from "./Pages";
import Nav from "./components/nav-bar/nav";


function App() {

    return (<Router>
        <div className="App">
            <Nav/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/DisplayMuscle" element={<DisplayMuscles/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/HealthAndSafety" element={<HealthAndSafety/>}/>
                <Route path="/ExercisesResult" element={<ExercisesResult/>}/>
                
                <Route path="/admin/muscles" element={<AdminMuscle/>}/>
                <Route path="/admin/exercises" element={<AdminExercise/>}/>
            </Routes>
        </div>
    </Router>);
}

export default App;