import React from 'react';
import './child.css'

const ChildExercise = (props) => {
    let data = props.props
    const description = "Something short and leading about the exercise, the difficulty, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."
    return (
        <div>
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
                                <button type="button" className="btn btn-sm btn-outline-secondary">View
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary" id="me">Add to Workout
                                </button>
                            </div>
                            <small className="text-muted">Recommended Weight: 45Kg</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildExercise;