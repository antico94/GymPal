import React from 'react'
import Select from 'react-select'


function CustomSelect(props) {
    return <div>
        <Select isMulti={props.isMulti}
                onChange={props.onChange}
                options = {props.options}
                defaultValue={props.defaultValue}
        />
    </div>
}

export default CustomSelect;
