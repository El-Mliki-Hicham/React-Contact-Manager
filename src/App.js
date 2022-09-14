import React from "react";
import Form from "./Components/InputForm";
import List from "./Components/listData";
class App extends React.Component {
  
      state={
       data : [
        {id:1 ,book:'fire and blode',auteur :'hicham' },
        {id:2 ,book:'game of throns',auteur :"jorj"}
      ]
      }

      addBook=(value)=>{
        t

      }

  render(){
    
  return (
   <div>
    <Form addBook={this.addBook} />
    <List Data ={this.state.data} addBook={this.addBook} />
   </div>
  );
}
}
export default App;
