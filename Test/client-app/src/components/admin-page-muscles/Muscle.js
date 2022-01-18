import React, {Component} from "react";
import {variables} from "../../containers/Variables";
import './muscle.css'

export class Muscle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            muscles: [], thisTitle: "NotChanging", Name: "", selectedOption: 0
        }

    }

    refreshList() {
        fetch(variables.MUSCLE_API_URL)
            .then(response => response.json())
            .then(data => this.setState({muscles: data}))
    }

    componentDidMount() {
        this.refreshList();
        // document.getElementById("sex").style.visibility = "hidden";
    }

    changeMuscleName = (e) => {
        this.setState({Name: e.target.value});
    }

    changeSelected = (e) => {
        this.setState({selectedOption: e.target.value});
    }

    addClick() {
        this.setState({
            thisTitle: "Add Muscle", Id: 0, Name: ""
        });
    }

    editClick(muscle) {
        this.setState({
            thisTitle: "Edit Muscle", Id: muscle.Id, Name: muscle.Name
        });
    }

    createClick() {
        console.log(this.state.Name)
        console.log(this.state.selectedOption)
        const dict = {
            "Arms" : 1,
            "Back" : 2,
            "Core" : 3,
            "Legs" : 4
        }
        fetch(variables.MUSCLE_API_URL, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify({
                Name: this.state.Name, Category: dict[this.state.selectedOption]
            })
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                this.refreshList()
            }, (error) => {
                console.log(error)
                this.refreshList()
            })

    }


    updateClick() {
        fetch(variables.MUSCLE_API_URL + "/" + this.state.Id, {
            method: 'PUT', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify({
                Id: this.state.Id, Name: this.state.Name, Category: this.state.selectedOption
            })
        })
            .then(res => res.json())
            .then((result) => {
                console.log("Succes MDF " + result)
                this.refreshList()
            }, (error) => {
                this.refreshList()
                console.log("eRROR MDF " + error)
            })
    }


    deleteClick(id) {
        if (window.confirm("Are you sure?")) {
            fetch(variables.MUSCLE_API_URL + "/" + id, {
                method: 'DELETE', headers: {
                    'Accept': 'application/json', 'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    console.log("Succes MDF " + result)
                    this.refreshList()
                }, (error) => {
                    this.refreshList()
                    console.log("eRROR MDF " + error)
                })
        }
    }

    render() {
        const {
            muscles, Id, thisTitle, Name
        } = this.state
        const Category = {
            0: "Arms", 1: "Back", 2: "Core", 3: "Legs"
        }
        return (

            <div className='admin-muscle'>
                <button type="button"
                        className="btn btn-primary m-2 float-end"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => this.addClick()}>
                    Add Muscle
                </button>
                <h3 className="d-flex justify-content-center m-3">Muscle Page</h3>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Category
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {muscles.map(mus => <tr key={mus.Id}>
                        <td>{mus.Id}</td>
                        <td>{mus.Name}</td>
                        <td>{Category[mus.Category]}</td>
                        <td>
                            <button type='button'
                                    className="btn btn-light mr-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => this.editClick(mus)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd"
                                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </button>

                            <button type='button'
                                    className="btn btn-light mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     onClick={() => this.deleteClick(mus.Id)}
                                     className="bi bi-trash-fill" viewBox="0 0 16 16">

                                    <path
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>)}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{thisTitle}</h5>
                                <button type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Name</span>
                                    <input type="text" className="form-control"
                                           value={Name}
                                           onChange={this.changeMuscleName}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Category</span>
                                    <select value={this.state.selectedOption} onChange={this.changeSelected}>
                                        {Object.entries(Category).map(([key, value]) => (
                                            <option key={key}>{value}</option>))}
                                    </select>
                                </div>
                                {Id === 0 ? <button type="button"
                                                    className="btn btn-primary float-start"
                                                    onClick={() => this.createClick()}
                                >Create</button> : null}

                                {Id !== 0 ? <button type="button"
                                                    onClick={() => this.updateClick()}
                                                    className="btn btn-primary float-start">Update</button> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}