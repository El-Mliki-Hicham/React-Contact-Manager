import React from "react";
import axios from "axios";
import './AddUser.css'

export class AddUser extends React.Component{

    state = {
        id: '',
        Nom: '',
        Phone: '',
        Email: ''
    };

    //stock value in state
changeHandler=(e) => {
    this.setState({ [e.target.id]: e.target.value})
    console.log(this.state)
}   

// send data to api json-server
submitHandler = async(e) => {
    e.preventDefault() 
    await axios.post('http://127.0.0.1:8000/api/add', this.state)
    .then((res)=> alert("add success"));
    window.location.reload(false); 
   
//  setTimeout(function(){
//     window.location.reload();
//  }, 500);
}

render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Add User Form</h1>
                    <form  onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="Name">Full Name</label>
                            <input type="text" className="form-control"  onChange={this.changeHandler} id="Nom" placeholder="Enter Name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone number</label>
                            <input type="text" className="form-control" id="Phone"  onChange={this.changeHandler}  placeholder="Enter Number"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"  onChange={this.changeHandler} placeholder="Enter email"></input>
                        </div>
                        <button type="submit" style={{marginTop:'20px',marginBottom:'20px'}} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
}