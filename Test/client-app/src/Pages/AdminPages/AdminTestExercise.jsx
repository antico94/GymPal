import React, {useEffect, useState} from 'react';
import {fetchCustomData} from "../../containers/utility";
import {API} from "../../containers/API";
import {ExercisesResult} from "../index";
import useModal from "../../components/adding-modal/useModal";
import Modal from "../../components/adding-modal/AddingModal";

const AdminTestExercise = () => {
    const {isShowing, toggle} = useModal();
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

    return (<div className="admin-exercise">
        {!exercisesLoaded && <div className="data-is-not-loaded">
            <h1>Data not loaded</h1>
        </div>}
        {exercisesLoaded && <div className="data-is-loaded">
            <div className="content">
                <div className="buttons">
                    <div id="one" className="button">Unfolding</div>
                </div>
            </div>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
            <ExercisesResult props={exercises} admin={true}/>
        </div>
        }
    </div>);
};

export default AdminTestExercise;

    
