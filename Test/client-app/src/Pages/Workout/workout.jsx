import React, {useEffect, useState} from 'react';
import {fetchCustomData} from "../../containers/utility";
import {API} from "../../containers/API";
import {ExercisesResult} from "../index";

const Workout = () => {
    const [workouts, setWorkouts] = useState([]);
    const [workoutsLoaded, setWorkoutsLoaded] = useState(false)


    useEffect(() => {
        if (workoutsLoaded === false) {
            fetchCustomData(API.WORKOUT, "GET").then(data => data.json().then(x => {
                setWorkouts(x)
                setWorkoutsLoaded(true)
            }))

        }
         else {
            console.log("data loaded is true now")
            console.log(workouts)


        }

    }, [workoutsLoaded])

    return (<div className="workout-page">
        {!workoutsLoaded && <div className="data-is-not-loaded">
            <h1>Data not loaded</h1>
        </div>}
        {workoutsLoaded && <div className="data-is-loaded">
            <ExercisesResult props={workouts} admin={false}/>
        </div>
        }
    </div>);
};

export default Workout;