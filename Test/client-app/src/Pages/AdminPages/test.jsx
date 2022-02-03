import React, {useEffect, useState} from 'react';
import {fetchCustomData} from "../../containers/utility";
import {API} from "../../containers/API";
import useModal from "../../components/adding-modal/useModal";

const Test = () => {
    // const {isShowing, toggle} = useModal();
    const [exercises, setExercises] = useState([]);
    const [muscles, setMuscles] = useState([]);
    const [exercisesLoaded, setExercisesLoaded] = useState(false)
    const [musclesLoaded, setMusclesLoaded] = useState(false)


    useEffect(() => {
        if (exercisesLoaded === false) {
            fetchCustomData(API.EXERCISE, "GET").then(data => data.json().then(x => {
                setExercises(x)
                setExercisesLoaded(true)
            }))

        }
        if (musclesLoaded === false) {
            fetchCustomData(API.MUSCLE, "GET").then(data => data.json().then(x => {
                setMuscles(x)
                setMusclesLoaded(true)
            }))
        } else {
            console.log("data loaded is true now")
            console.log(exercises)
            console.log(muscles)

        }

    }, [exercisesLoaded, musclesLoaded])
    return (
        <div>
            <h1>Testing route</h1>
        </div>
    );
};

export default Test;