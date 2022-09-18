import React from "react";
import axios from "axios";

export const Table =()=>{

    const [data, setData] = useState([{}]);
const getData = async ()=>{
    await axios.get('http://localhost:8000/user').then((res)=>setData(res.data))
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