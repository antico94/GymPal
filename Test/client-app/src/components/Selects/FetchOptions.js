import {variables} from "../../Variables";


export const options = []
function refreshValues(){
    fetch(variables.MUSCLE_API_URL)
    .then(response => response.json())
    .then(result => result.map(function (line) {
        console.log(line)
        let dict = {label: line.Name, value: line.Id}
        options.push(dict)
    }))
}

refreshValues()



export default options