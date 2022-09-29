import React, { Component } from "react";
import { AddUser } from "./Components/AddUser"
import Edit from "./Components/EditUser";
import axios from "axios";
import {Route, Link, Routes, useParams, NavLink  ,BrowserRouter} from 'react-router-dom';

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
              
                  

                  <Route  path="/edit/:id" element={<Edit />}> </Route>
                  <Route path="/" element={ < AddUser />}/>
                  
                  
                  </Routes>

                </BrowserRouter>
              
                    <Table />
  </div>
  )
}
}
export default App;
