import {useContext, useEffect, useState} from "react";
import UserContext from "../UserContext1";
import axios from "../../../axios";
import requests from "../../../requests";
import AddIngredients from "./AddIngredients";

function Ingredients() {
    const [newId, setNewId] = useState(0);
    const user = useContext(UserContext);
    const [data, setData] = useState([]);

    async function loadData() {
        let bearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZWthQGdtYWlsLmNvbSIsImV4cCI6MTYyMTU4NDM5NywiaWF0IjoxNjIxNTY5OTk3fQ.GrZzVs4Mip4ulUpWTsP_KcLSPsd6oDGAVqe12KsInloe3WAXurA9dVTAkdGvWNsn0MIhkegZgJS7aHHCSC3loQ";

        let response = await axios.get(requests.getingredients, {
            headers: {
                'Authorization': bearer,
            }
        })
        console.log(response.data);
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, [newId]);


    return (
        <>
            <div className="container">
                <h2>Ingredients</h2>

                <AddIngredients newIngredientsAdded={setNewId}/>

                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map(row => (
                        <tr>
                            <td>
                                {row.id}
                            </td>
                            <td>
                                {row.name}
                            </td>
                            <td>
                                <a href={`/editi/${row.id}`} className="btn btn-primary btn-sm">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default Ingredients;