import React from 'react';
import "./exercises.css";
import ChildExercise from "../../components/child-exercises/ChildExercise";
import useModal from "../../components/adding-modal/useModal";
import Modal from "../../components/adding-modal/AddingModal";

const Exercises = (props) => {

    const data = props.props
    data.forEach(exercise=> console.log(exercise))
    return (<main className="tampit">
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    {!props.admin && <h1 className="fw-light">Results</h1>}
                    {props.admin && <h1 className="fw-light">Admin Menu</h1>}

                </div>
            </div>
        </section>


        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="insert-child">
                    {data.map((item,index)=>{
                        return <ChildExercise key={index} props={item} admin={props.admin}/>})}
                </div>
            </div>
        </div>

    </main>);
};

export default Exercises;