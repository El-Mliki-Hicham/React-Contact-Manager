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
            </tbody>
          ))}
       </table>
 
</div>
)
}
}