import React, { Component } from "react";
import { AddUser } from "./Components/AddUser";
import { Table } from "./Components/TableData";
class App extends React.Component {
  


  render(){
    
  return (
    <div>
  <AddUser />
  <Table />
  </div>
  )
}
}
export default App;
