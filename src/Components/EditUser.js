import React from "react";
import axios from "axios";
import './AddUser.css'

import withRouter from "./withRouter";


 class Edit extends React.Component{
     state ={
     id: '',
     Name: '',
     Phone: '',
     Email: ''
      
    };
    changeHandler=(e) => {
      
            this.setState({ [e.target.id]: e.target.value})
     
        console.log(this.state)
    }   
    componentDidMount() {
        let id =this.props.params.id
      
        axios.get('http://localhost:4000/user/'+id)
  
          .then((res)=>{
           
            this.setState({
                Name: res.data.Name,
                Phone: res.data.Phone,
                Email: res.data.Email
            })
            console.log(this.state)       
          })
        }
          
    handleUpdate = () => {
       
        let id = this.props.params.id
        const { Name, Phone, Email } = this.state;
        axios.put('http://localhost:4000/user/'+id ,{
            Name: Name,
            Phone: Phone,
            Email: Email
        })  
          
        window.location.replace('/')
    
    }
  
render() {
      
    const { Name, Phone, Email } = this.state;
   
    return(
     <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Add User Form</h1>
                    
                    <form  >
                        <div className="form-group" onSubmit={()=>this.submitHandler}>
                            <label htmlFor="Name">Full Name</label>
                            <input type="text" className="form-control" defaultValue={Name} id="Name" placeholder="Enter Name" onChange={this.changeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone number</label>
                            <input type="numbre" className="form-control"    defaultValue={Phone} id="Phone" placeholder="Enter Number" onChange={this.changeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="Email"  defaultValue={Email} aria-describedby="emailHelp"  placeholder="Enter email" onChange={this.changeHandler}></input>
                        </div>
                        <input type="button" name="update" style={{marginTop:'20px',marginBottom:'20px'}} value='Update' className="btn btn-primary"   onClick={this.handleUpdate}></input>
                    </form>
                        
                </div>
            </div>
        </div>
    )
}
}
export default withRouter(Edit);