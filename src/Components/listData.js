import React from "react";
import { Fragment } from "react";

class List extends React.Component{
    render(){
        const Data = this.props.Data 
        const show_Data = Data.map(value =>{
            return(
                <Fragment>
             <tr>
                <td>{value.id}</td>
                <td>{value.book}</td>
                <td>{value.auteur}</td>
                <td>x</td>
            </tr>
            </Fragment>
            )
        })
        return(
            <div>
               <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>book</th>
                        <th>auter</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                {show_Data}
                </tbody>
               </table>
            </div>
        )
    }
}
export default List 