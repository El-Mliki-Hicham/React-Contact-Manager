import React from "react";
import axios from "axios";
import './AddUser.css'
import { useParams } from "react-router-dom";
import withRouter from "./withRouter";


 class Edit extends React.Component{
     state = { user : [],
       update:''
      
    };
    componentDidMount() {
        let id =this.props.params.id
       console.log(id)
        axios.get('http://localhost:4000/user/'+id)
  
          .then((res)=>{
           
            this.setState({
                user: res.data
            })
            console.log(this.state.user)
            
          
           
          })
             }
    
 
    

    



    // handleUpdate = () => {
    //     const { Name, Phone, Email } = this.state;

    //     axios.put(`http://dummy.restapiexample.com/api/v1/update/5`, {
    //         Name: {Name},
    //         Phone: {Phone},
    //         Email: {Email}
    //     })
    //     .then(response => {
    //         this.setState({ status: response.status });
    //     })
    // }
  

    // stock value in state
changeHandler=(e) => {
    this.setState({ update: e.target.value})
    
    console.log(this.state.update)
}   

// send data to api json-server
submitHandler = (e) => {
    e.preventDefault() 
    axios.post('http://localhost:4000/user', this.state)
 // auto reload page     
    window.location.reload(false);
       
}

render() {
    
   
    const { Name, Phone, Email } = this.state.user;
   
    return(

        
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Add User Form</h1>
                    
                    <form >
                        <div className="form-group" onSubmit={()=>this.submitHandler}>
                            <label htmlFor="Name">Full Name</label>
                            <input type="text" className="form-control" defaultValue={Name} id="Name" placeholder="Enter Name" onChange={this.changeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone number</label>
                            <input type="text" className="form-control" id="Phone"   defaultValue={Phone}  placeholder="Enter Number" onChange={()=>this.changeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="Email"  defaultValue={Email} aria-describedby="emailHelp"  placeholder="Enter email" onChange={()=>this.changeHandler}></input>
                        </div>
                        <button type="submit" style={{marginTop:'20px',marginBottom:'20px'}} className="btn btn-primary">Submit</button>
                    </form>
                        
                </div>
            </div>
        </div>
    )
}
}
export default withRouter(Edit);