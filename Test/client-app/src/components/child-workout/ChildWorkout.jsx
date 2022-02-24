import React, {useState} from 'react';
import {ExercisesResult} from "../../Pages";

const ChildWorkout = (props) => {
    const [show, setShow] = useState(false);
    const onClickHandler = () => {
        setShow(true)
    }
    let data = props.props
    console.log(data)
    const description = data.Description
    if (!show) {
        return (<div>
            <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>{data.Name}</title>
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="30%" y="50%" fill="#eceeef" dy=".3em">{data.Name} Photo</text>
                    </svg>

                    <div className="card-body">
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group" id="add-to-workout">
                                <button type="button" className="btn btn-sm btn-outline-secondary"
                                        onClick={onClickHandler} id="view-workout">View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    } else {
        return (<ExercisesResult props={data} admin={false}/>)
    }
}


export default ChildWorkout;