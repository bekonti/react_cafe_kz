import {useContext, useEffect, useState} from "react";
import axios from "../../../axios";
import requests from "../../../requests";
import {Link} from "react-router-dom";

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
        let bearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZWthQGdtYWlsLmNvbSIsImV4cCI6MTYyMTU4NDM5NywiaWF0IjoxNjIxNTY5OTk3fQ.GrZzVs4Mip4ulUpWTsP_KcLSPsd6oDGAVqe12KsInloe3WAXurA9dVTAkdGvWNsn0MIhkegZgJS7aHHCSC3loQ";
        const response = axios.post(requests.addFoodType, {"name": name},
            {
                headers: {

                    'Authorization': bearer
                }
            });
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <Link to="/kitchen">
                        Back
                    </Link> <br/>
                    <label>Name:</label>
                    <input type="text" className="form-control" value={name} onChange={handleNameChange}/>
                </div>
                <button className="btn btn-success">Add Type</button>
            </form>
        </div>
    )
}

export default AddFoodType;