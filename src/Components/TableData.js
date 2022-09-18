import React from "react";
import axios from "axios";
import { useState ,useEffect } from "react";




export class Table extends React.Component {

   
        state = {
          user: []
        }   
    componentDidMount() {
        fetch("http://localhost:4000/user")
          .then(res => res.json())
          .then(
            (result) => {
             this.setState({
                user : result
             })
             console.log(this.state)
            },
          )
      }

      

    
//     const [state, setState] = useState([{}]);
//     useEffect(() => {
//        getData();
//        console.log(state)
//         }, []);
// const getData = async ()=>{
//     await axios.get('http://localhost:4000/user')
//     .then((res)=>setState(res.data))

// }  
render(){
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
}