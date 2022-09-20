import React, { Component } from "react";
import { AddUser } from "./Components/AddUser"
import axios from "axios";
import  Table  from "./Components/TableData";
import ReactDOM from "react-dom";
class App extends React.Component {
  
  
  render(){
   const show =  this.props.data;
   console.log(show) 
    
    return (
    <div>
  <AddUser />
  <Table />
  </div>
  )
}
}
export default App;
