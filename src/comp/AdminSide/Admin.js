import {useContext, useEffect, useState} from "react";
import axios from "../../axios";
import requests from "../../requests";
import UserContext from "./UserContext1";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function AddFoodType() {
    const [name, setName] = useState("");
    const [mes, setMes] = useState("");

    const handleNameChange = event => {
        setName(event.target.value);
        // this.props.setQWE(event.target.value);
    }

    const handleSubmit = event => {
        const inputData = {name,};
        addFoodType(inputData);
        setName("");
        event.preventDefault();
    }

    async function addFoodType() {
        const response = axios.post(requests.addFoodType, {"name": name});
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={name} onChange={handleNameChange}/>
                </div>
                <button className="btn btn-success">Add Type</button>
            </form>
        </div>
    )
}

function Admin() {
    return (
        <div className="container">
            <h3>Admin Side</h3>
            <Link to="/foodType">
                <button className="btn btn-primary">
                    Food Types
                </button>
            </Link><br/>
            <Link to="/ingredients">
                <button className="btn btn-primary mt-2">
                    Ingredients
                </button>
            </Link><br/>
            <Link to="/food">
                <button className="btn btn-primary mt-2">
                    Foods
                </button>
            </Link>

        </div>
    )
}

export default Admin;