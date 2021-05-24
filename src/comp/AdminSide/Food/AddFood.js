import {useContext, useEffect, useState} from "react";
import axios from "../../../axios";
import requests from "../../../requests";
import {Link} from "react-router-dom";

function AddFood() {
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState(0);
    const [mes, setMes] = useState("");
    const [ftype, setFtype] = useState(0);

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handlePriceChange = event => {
        setPrice(event.target.value);
    }

    const handlePhotoChange = event => {
        setPhoto(event.target.value);
    }

    const handleSubmit = event => {
        const inputData = {name, price, photo};
        addFoodType(inputData);
        setName("");
        event.preventDefault();
    }

    async function addFoodType() {
        let bearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZWthQGdtYWlsLmNvbSIsImV4cCI6MTYyMTU4NDM5NywiaWF0IjoxNjIxNTY5OTk3fQ.GrZzVs4Mip4ulUpWTsP_KcLSPsd6oDGAVqe12KsInloe3WAXurA9dVTAkdGvWNsn0MIhkegZgJS7aHHCSC3loQ";
        const response = axios.post(requests.addFood, {"name": name, "price": price, "photo": photo},
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
                    <label>Price:</label>
                    <input type="number" className="form-control" value={price} onChange={handlePriceChange}/>
                    <label>Photo:</label>
                    <input type="text" className="form-control" value={photo} onChange={handlePhotoChange}/>

                    {/*{ftype?.map(row => (*/}
                    {/*    // <input type="radio" name="ftype" value={row.id} className="form-control"/> {row.name}*/}
                        {/*))}*/}

                </div>
                <button className="btn btn-success">Add Type</button>
            </form>
        </div>
    )
}

export default AddFood;