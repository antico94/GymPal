import React from 'react';
import CustomSelect from './CustomSelect';
import {variables} from "../../Variables";
import {options} from "./FetchOptions"

const styles = {
    app: {
        // backgroundColor:'rgba(0,0,0,0.1)',
        // justifyItems:'center',
        // alignItems:'center',
        // display:'grid',
        height: '1vh',
        // fontFamily:'Arial',
        color: 'rgba(0,0,100,1)',
        // gridTemplateColumns:'1fr',
        fontSize: 15
    },
    select: {
        width: '100%',
        maxWidth: 600
    }
}





function onChangeInput(value) {
    console.log(value);
}

function App() {
    return (
        <div style={styles.app}>
            {console.log(options)}
            <CustomSelect isMulti={true} style={styles.select} defaultValue={options} onChange={onChangeInput}
                          options={options} label="Choose muscles"/>
        </div>
    );


}

export default App;