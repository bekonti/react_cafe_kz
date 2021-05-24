import {useContext, useEffect, useState} from "react";
import UserContext from "../UserContext1";
import axios from "../../../axios";
import requests from "../../../requests";
import AddFood from "./AddFood";

function Food() {
    const [newId, setNewId] = useState(0);
    const user = useContext(UserContext);
    const [data, setData] = useState([]);

    async function loadData() {
        let bearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZWthQGdtYWlsLmNvbSIsImV4cCI6MTYyMTU4NDM5NywiaWF0IjoxNjIxNTY5OTk3fQ.GrZzVs4Mip4ulUpWTsP_KcLSPsd6oDGAVqe12KsInloe3WAXurA9dVTAkdGvWNsn0MIhkegZgJS7aHHCSC3loQ";

        let response = await axios.get(requests.getfoods, {
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
                <h2>Food</h2>

                <AddFood newFoodAdded={setNewId}/>

                <table>
                    <thead>
                    <tr>
                        <th className="px-2">ID</th>
                        <th className="px-3">Имя</th>
                        <th className="px-3">Цена</th>
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map(row => (
                        <tr>
                            <td className="px-2">
                                {row.id}
                            </td>
                            <td className="px-3">
                                {row.name}
                            </td>
                            <td className="px-3">
                                {row.price}
                            </td>
                            <td>
                                <a href={`/editf/${row.id}`} className="btn btn-primary btn-sm">
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

export default Food;