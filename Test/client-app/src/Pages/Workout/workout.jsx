import React, {useEffect, useState} from 'react';
import {fetchCustomData} from "../../containers/utility";
import {API} from "../../containers/API";
import {ExercisesResult} from "../index";
import ChildExercise from "../../components/child-exercises/ChildExercise";
import ChildWorkout from "../../components/child-workout/ChildWorkout";
import ChildComponent from "./ChildComponent";

const Workout = () => {
    const [workouts, setWorkouts] = useState([]);
    const [workoutsLoaded, setWorkoutsLoaded] = useState(false)
    // const [viewWorkoutDataLoaded, setViewWorkoutDataLoaded] = useState(false)
    // const [viewWorkoutData, setViewWorkoutData] = useState({})
    // const [count, setCount] = useState(0);

    // const ViewWorkout = (workoutId, isDataLoaded) => {
    //     if (isDataLoaded === false) {
    //         setCount(count + 1)
    //         fetchCustomData(API.WORKOUT + "/" + workoutId, "GET").then(data => data.json().then(x => {
    //             setViewWorkoutData(x)
    //             setViewWorkoutDataLoaded(true)
    //         }))
    //     }
    //     console.log(count)
    // }


    useEffect(() => {
        if (workoutsLoaded === false) {
            fetchCustomData(API.WORKOUT, "GET").then(data => data.json().then(x => {
                setWorkouts(x)
                setWorkoutsLoaded(true)
                console.log(x)
            }))

        }
    }, [workoutsLoaded])

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-3" id="insert-child">
                    {workouts.map((item, index) => {
                        return <ChildComponent key={index} props={item}/>
                    })}
                </div>
            </div>
        </div>);
};
    
export default Workout;