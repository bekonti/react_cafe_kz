import {CardGroup, Card, CardImgProps, Badge, Button, Col, Row, Container,} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "../../../axios";
import requests from "../../../requests";
import UserContext from "../UserContext1";

function EditFoodType() {
    let {itemId} = useParams();
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [mes, setMes] = useState("");
    const user = useContext(UserContext);
    let bearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZWthQGdtYWlsLmNvbSIsImV4cCI6MTYyMTU4NDM5NywiaWF0IjoxNjIxNTY5OTk3fQ.GrZzVs4Mip4ulUpWTsP_KcLSPsd6oDGAVqe12KsInloe3WAXurA9dVTAkdGvWNsn0MIhkegZgJS7aHHCSC3loQ";

    const handleNameChange = event => {
        setName(event.target.value);
        // this.props.setQWE(event.target.value);
    }

    const handleSubmit = event => {
        const inputData = {name,};
        // const inputData = {name,description};
        saveFoodType(inputData);
        event.preventDefault();
    }

    async function saveFoodType(inputData) {
        console.log(inputData);
        const response = axios.put(requests.savefoodtype, {"id": itemId, "name": name},
            {
                headers:
                    {
                        'Authorization': bearer
                    }
            })
            .then(
                setMes("Congrats")
            );
    }

    async function deletefoodtype() {
        const inputData = {name,};
        const response = await axios.delete(requests.deletefoodtype + itemId, {
            headers:
                {
                    'Authorization': bearer
                }
        })
    }

    useEffect(() => {
        getFoodType(itemId);
    }, [itemId])

    async function getFoodType(idd) {
        let response = await axios.get(requests.getfoodtype + idd,
            {
                headers:
                    {
                        'Authorization': bearer
                    }
            });
        console.log(response);
        if (response.data !== null) {
            setName(response.data.name);
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
                </div>
                <button className="btn btn-success">Save Type</button>
                <button className="btn btn-danger ml-2" type="button" onClick={deletefoodtype}>
                    DELETE FOOD TYPE
                </button>
                <br/>
                <Link to="/foodtype">
                    Back to List
                </Link>
            </form>
        </div>
    )
}


export default EditFoodType;