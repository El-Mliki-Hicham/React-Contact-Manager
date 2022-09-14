import React from "react";

class Form extends React.Component{

    render(){
        return(
            <div>
                <form>
                    book <input type="text"></input><br></br>
                    auter <input type="text"></input><br></br>
                    <input type="submit" value='add'></input>
                    
                </form>
            </div>
        )
    }
}
export default Form