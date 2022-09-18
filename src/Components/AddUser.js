import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export const AddUser =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Add User Form</h1>
                    <form>
                        <div class="form-group">
                            <label for="Name">Full Name</label>
                            <input type="text" class="form-control" id="Name" placeholder="Enter Name"></input>
                        </div>
                        <div class="form-group">
                            <label for="Phone">Phone number</label>
                            <input type="text" class="form-control" id="Phone"  placeholder="Enter Number"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}