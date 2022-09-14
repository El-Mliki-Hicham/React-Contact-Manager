import React from "react";

class Form extends React.Component{
state={
    id:'',
    book:'',
    auteur:''
}
    changeValeur=(e)=>{
        this.setState(
            {   id:Math.random(),
                [e.target.id]:e.target.value}
        )
    }
    setValuer = (e)=>{
    e.preventDefault();
    e.addBook(this.state)
}


    render(){   
        return(
            <div>
                <form onSubmit={this.setValuer} >
                    book <input type="text" id="book" onChange={this.changeValeur}></input><br></br>
                    auter <input type="text" id="auteur" onChange={this.changeValeur}></input><br></br>
                    <input type="submit" value='add'></input>
                    
                </form>
            </div>
        )
    }
}
export default Form