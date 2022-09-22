import React, { Component } from "react";
import { AddUser } from "./Components/AddUser"
import Edit from "./Components/EditUser";
import axios from "axios";
import {Route, Link, Routes, useParams, useNavigate  ,BrowserRouter} from 'react-router-dom';

import  Table  from "./Components/TableData";
import ReactDOM from "react-dom";
class App extends React.Component {
  
  
  render(){
   const show =  this.props.data;
   console.log(show) 
    
    return (
    <div>
               <BrowserRouter>
                
                <Routes>
                  <Route  exact  path="/edit" element={<Edit />}> </Route>
                  
                </Routes>
                </BrowserRouter>
  <AddUser />
  <Table />
  </div>
  )
}
}
export default App;
