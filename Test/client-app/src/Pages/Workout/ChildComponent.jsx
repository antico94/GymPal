import React, {useState} from 'react';
import SubExercises from "./WorkoutExercises";
import $ from 'jquery'

const ChildComponent = (props) => {
    const data = props.props.GymTasks
    const [show, setShow] = useState(false);
    const onCLickHandler = () => {
        setShow(!show)
        let button = $("#workout-main-button")
        if (show){

            button.text("View Tasks")
        }
        else {
            button.text("Hide Tasks")
        }
    }
    
    return (<div className="tampit">
        {/*<section className="py-5 text-center container">*/}
        {/*    <div className="row py-lg-5">*/}
        {/*        <div className="col-lg-6 col-md-8 mx-auto">*/}
        {/*            <h1 className="fw-light">{props.props.Name}</h1>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
            <div className="col">
                <div className="card shadow-sm">
                    <h3>{props.props.Name}</h3>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>{props.props.Name}</title>
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="30%" y="50%" fill="#eceeef" dy=".3em">{props.props.Name} Photo</text>
                    </svg>

                    <div className="card-body">
                        <p className="card-text">{props.props.Description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group" id="add-to-workout">
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onCLickHandler} id="workout-main-button">View Tasks
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        {show && <div className="album py-5 bg-light">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="insert-child">
                    {data.map((item,index)=>{
                        return <SubExercises key={index} props={item} />})}
                </div>
            </div>
        </div>}

    </div>);
};

export default ChildComponent;