import React from 'react'
import Select from 'react-select'


const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: '1px dotted pink',
      padding: 10,
      backgroundColor:'rgba(100,100,100,0.8)'
    }),

    control: (_, { selectProps: { width }}) => ({
      width: width
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }


function CustomSelect({options,onChange,defaultValue,isMulti}){
    return <div>
        <Select styles={customStyles} isMulti={isMulti} options={options} onChange={onChange} defaultValue={[]}/>
    </div>
}

export default CustomSelect;
