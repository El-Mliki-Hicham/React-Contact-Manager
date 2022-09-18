import React from "react";
import axios from "axios";
import { useState ,useEffect } from "react";


export const Table =()=>{

    const [state, setState] = useState([{}]);
    useEffect(() => {
       getData();
       console.log(state)
        }, []);
const getData = async ()=>{
    await axios.get('http://localhost:4000/user')
    .then((res)=>setState(res.data))

}  
    return(
    <div >

    <table className="table" >
    <thead>
        <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            <td></td>
            <td></td>
            <td></td>
            </tbody>
       </table>
 
</div>
)
}