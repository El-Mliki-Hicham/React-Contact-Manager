import React from "react";
import axios from "axios";
import { useState ,useEffect } from "react";




export class Table extends React.Component {
        state = {
          user: []
        }  
        
        //get data from api json-server
    componentDidMount() {
        fetch("http://localhost:4000/user")
          .then(res => res.json())
          .then(
            (result) => {
             this.setState({
                user : result
             })
            },
          )
      }

      //delete function
handleDelete= async(id)=>{

  await axios.delete('http://localhost:4000/user/'+id)
  .then((res)=> alert("deleted success"));
  window.location.reload(false);
   
}
    
//     
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
        {this.state.user.map(user => (
        <tbody key={user.id}>
            
            <td>{user.id}</td>
            <td>{user.Name}</td>
            <td>{user.Phone}</td>
            <td>{user.Email}</td>
            <td  >

            <button style={{marginRight:"10px"}} className="btn btn-info">Edit</button>
            <button className="btn btn-danger" style={{color:'red'}}  onClick={()=>this.handleDelete(user.id)}>Delete</button>
            </td>
            </tbody>
          ))}
       </table>
 
</div>
)
}
}