import React, {Component} from "react";

export class Home extends Component{
    
    render(){
        document.getElementById("sex").style.visibility = "hidden";
        return(
            <div>
                <h3 className="d-flex justify-content-center m-3">Home Page</h3>
            </div>
        )
    }
}
