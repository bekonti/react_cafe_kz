import {CardGroup, Card, CardImgProps, Badge, Button, Col, Row, Container,} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "../../../axios";
import requests from "../../../requests";

function EditFood() {
    let {itemId} = useParams();
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState(0);
    const [mes, setMes] = useState("");
    let bearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZWthQGdtYWlsLmNvbSIsImV4cCI6MTYyMTU4NDM5NywiaWF0IjoxNjIxNTY5OTk3fQ.GrZzVs4Mip4ulUpWTsP_KcLSPsd6oDGAVqe12KsInloe3WAXurA9dVTAkdGvWNsn0MIhkegZgJS7aHHCSC3loQ";

    const handleNameChange = event => {
        setName(event.target.value);
        // this.props.setQWE(event.target.value);
    }
    const handlePriceChange = event => {
        setPrice(event.target.value);
    }

    const handlePhotoChange = event => {
        setPhoto(event.target.value);
    }


    const handleSubmit = event => {
        const inputData = {name,};
        // const inputData = {name,description};
        saveFood(inputData);
        event.preventDefault();
    }

    async function saveFood(inputData) {
        console.log(inputData);

        const response = axios.put(requests.savefood, {"id": itemId, "name": name},
            {
                headers: {
                    'Authorization': bearer
                }
            })
            .then(
                setMes("Congrats")
            );
    }

    async function deletefood() {
        const inputData = {name,};
        let codee = {
            "id": itemId,
            "name": name
        }
        const response = await axios.delete(requests.deletefood + itemId, {
            headers: {
                'Authorization': bearer
            }
        })
    }

    useEffect(() => {
        getFood(itemId);
    }, [itemId])

    async function getFood(idd) {
        let response = await axios.get(requests.getfood + idd, {
            headers:
                {
                    'Authorization': bearer
                }
        });
        console.log(response);
        if (response.data !== null) {
            setName(response.data.name);
            setPrice(response.data.price);
            setPhoto(response.data.photo);
        } else {
            setName("404, не туда попали")
        }

    }

    return (
        <div className="container">
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={name} onChange={handleNameChange}/>
                    <label>Price:</label>
                    <input type="number" className="form-control" value={price} onChange={handlePriceChange}/>
                    <label>Photo:</label>
                    <input type="text" className="form-control" value={photo} onChange={handlePhotoChange}/>

                </div>
                <button className="btn btn-success">Save Food</button>
                <button className="btn btn-danger ml-2" type="button" onClick={deletefood}>
                    DELETE FOOD
                </button>
                <br/>
                <Link to="/food">
                    Back to List
                </Link>
            </form>
        </div>
    )
}


export default EditFood;