import React, { Component } from "react";
import { AddUser } from "./Components/AddUser"
import Edit from "./Components/EditUser";

import {Route,  Routes,  NavLink  ,BrowserRouter} from 'react-router-dom';

import  Table  from "./Components/TableData";

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
