import React from "react";
import axios from "axios";
import  Edit  from "./EditUser";
import { NavLink ,Router, useLocation} from "react-router-dom";
import { useState ,useEffect } from "react";
import { Provider } from "react";




class Table extends React.Component {
  
  state = {
    user: [],
    isEdit:false
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
// render update




//edit function 
// handleEdit = async(id)=>{
//   await axios.get('http://localhost:4000/user/'+id)
  
//   .then((res)=>{
   
//       console.log(res.data)
      
//     })
    
    // alert(res.data.Name));
// }
    
//   





render(){
    return(
    

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
            <tr>
            <td>{user.id}</td>
            <td>{user.Name}</td>
            <td>{user.Phone}</td>
            <td>{user.Email}</td>
            <td>

            <a href={'/edit/'+user.id}> <button style={{marginRight:"10px"}} className="btn btn-info"  >Edit</button></a>
            <button className="btn btn-danger" style={{color:'red'}}  onClick={()=>this.handleDelete(user.id)}>Delete</button>
     
                
   
            </td>
            
        
            </tr>
            </tbody>
          ))}
       </table>
 

)
}
}
export default Table