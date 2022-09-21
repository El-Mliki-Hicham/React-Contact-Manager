import React from "react";
import axios from "axios";
import './AddUser.css'

export class Edit extends React.Component{

    // state = {
    //     id: '',
    //     Name: '',
    //     Phone: '',
    //     Email: ''
    // };

    //stock value in state
// changeHandler=(e) => {
//     this.setState({ [e.target.id]: e.target.value})
    
//     // console.log(this.state)
// }   

// send data to api json-server
// submitHandler = (e) => {
//     e.preventDefault() 
//     axios.post('http://localhost:4000/user', this.state)
//  // auto reload page     
//     window.location.reload(false);
       
// }
render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Add User Form</h1>
                    <form >
                        <div className="form-group">
                            <label htmlFor="Name">Full Name</label>
                            <input type="text" className="form-control"  id="Name" placeholder="Enter Name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone number</label>
                            <input type="text" className="form-control" id="Phone"    placeholder="Enter Number"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"  placeholder="Enter email"></input>
                        </div>
                        <button type="submit" style={{marginTop:'20px',marginBottom:'20px'}} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
}