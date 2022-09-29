import React from "react";
import axios from "axios";
import './AddUser.css'

import withRouter from "./withRouter";


 class Edit extends React.Component{
     state ={
     id: '',
     Nom: '',
     Phone: '',
     Email: ''
      
    };
    changeHandler=(e) => {
      
            this.setState({ [e.target.id]: e.target.value})
     
        // console.log(this.state)
    }   
    async componentDidMount()  {
        let id =this.props.params.id
      
      
       await axios.get('http://127.0.0.1:8000/api/data/'+id)
  
       .then((res)=> {
        
           this.setState({
               
                Nom: res.data[0].Nom,
                Phone: res.data[0].Phone,
                Email: res.data[0].Email
            })
            console.log(this.state)       
          })
        }
        
          
    handleUpdate =async () => {
       
        let id = this.props.params.id
        const { Nom, Phone, Email } = this.state;
      await  axios.put('http://127.0.0.1:8000/api/update/'+id ,{
            Nom: Nom,
            Phone: Phone,
            Email: Email
        })  
          
        window.location.replace('/')
    
    }
  
render() {
      
    const { Nom, Phone, Email } = this.state;
   
    return(
     <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Add User Form</h1>
                    
                    <form  >
                        <div className="form-group" onSubmit={()=>this.submitHandler}>
                            <label htmlFor="Nom">Full Name</label>
                            <input type="text" className="form-control" defaultValue={Nom} id="Nom" placeholder="Enter Name" onChange={this.changeHandler}></input>
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