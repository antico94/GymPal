import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Login from "./Pages/Login&Register&Logout/Login";
import Register from "./Pages/Login&Register&Logout/Register";
import Logout from "./Pages/Login&Register&Logout/Register";
import {AdminExercise, AdminMuscle, Profile, DisplayMuscles, Homepage, HealthAndSafety, ExercisesResult} from "./Pages";
import Nav from "./components/nav-bar/nav";
import {currentUser, getCookie} from "./containers/utility";
import Workout from "./Pages/Workout/workout";
import AdminTestExercise from "./Pages/AdminPages/AdminTestExercise";
import Test from "./Pages/AdminPages/test";


function App() {
    const [user, setUser] = useState(null)
    const [userLogged, setUserLogged] = useState(false)
    
    useEffect(()=>{
        setUser(currentUser())
    },[user])
    useEffect(()=>{

        if (getCookie("userLoggedIn") === "true"){
            setUserLogged(true)
        }
        else setUserLogged(false)

    },[userLogged])
    return (<Router>
        <div className="App">
            <Nav userLoggedIn={userLogged}/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/DisplayMuscle" element={<DisplayMuscles/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/HealthAndSafety" element={<HealthAndSafety/>}/>
                <Route path="/ExercisesResult" element={<ExercisesResult/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/workout" element={<Workout/>}/>
                <Route path="/test" element={<Test/>}/>
                
                <Route path="/admin/muscles" element={<AdminMuscle/>}/>
                <Route path="/admin/exercises" element={<AdminExercise/>}/>
            </Routes>
        </div>
    </Router>);
}

export default App;