import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export class AddUser extends React.Component{

    state = {
        id: '',
        Name: '',
        Phone: '',
        Email: ''
    };

changeHandler= (e) => {
    this.setState({ [e.target.id]: e.target.value})
    console.log(this.state)
}   

submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://reqres.in/api/users?per_page=20', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}
render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Add User Form</h1>
                    <form>
                        <div class="form-group">
                            <label for="Name">Full Name</label>
                            <input type="text" class="form-control"  onChange={this.changeHandler} id="Name" placeholder="Enter Name"></input>
                        </div>
                        <div class="form-group">
                            <label for="Phone">Phone number</label>
                            <input type="text" class="form-control" id="Phone"  onChange={this.changeHandler}  placeholder="Enter Number"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="Email" aria-describedby="emailHelp"  onChange={this.changeHandler} placeholder="Enter email"></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
}