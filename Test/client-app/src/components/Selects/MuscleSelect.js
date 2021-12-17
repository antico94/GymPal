import React from "react";
import CreatableSelect from "react-select";
import {components} from "react-select";
import makeAnimated from "react-select/animated";
import {useState} from "react";

const animatedComponents = makeAnimated();

const Menu = props => {
    const optionSelectedLength = props.getValue().length || 0;
    return (<components.Menu {...props}>
            {optionSelectedLength < 5 ? (props.children) : (<div style={{margin: 15}}>Max limit achieved</div>)}
        </components.Menu>);
};

function MuscleMultiSelect(props) {
    const isValidNewOption = (inputValue, selectValue) => inputValue.length > 0 && selectValue.length < 5;
    // const [values, setValues] = useState([{value: 2, label: 'Deltoids'}, {value: 3, label: 'Sex'}])
    // debugger;

    const [values, setValues] = useState([])
    // const [values, setValues] = useState(["laba", "sex"])
    const changeHandler = (e) => {
        console.log("New Event")
        console.log("-------------------------------")


        console.log("The Event is: ")
        console.log(e)
        console.log()
        console.log()
        console.log()
        console.log("The Values before setValue are: ")
        console.log(values)
        console.log()
        console.log()
        console.log()
        setValues(e);
        console.log("The Values after setValue are: ")
        setTimeout(function () {
            console.log(values)
        }, 1000);
        console.log()
        console.log()
        console.log()

        // setTimeout(function () {
        //     console.log("VALUES:" + [...values[0]])
        // }, 1000);
        // setValues([...values, e.target.value]);

        props.onChange(e)
    }
    return (<div className="App">
            <CreatableSelect
                components={{Menu, animatedComponents}}
                isValidNewOption={isValidNewOption}
                isMulti={props.isMulti}
                onChange={changeHandler}
                options={props.options}
                selected = {props.selectedOption}
                value={values}
            />
        </div>);
}


export default MuscleMultiSelect

