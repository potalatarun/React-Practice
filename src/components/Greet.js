import React,{Component} from "react";
class Greet extends Component{
    constructor(){
        super()
        this.state = {
            message : "Hello visitor"
        }
    }

    changeMessage(){
        this.setState({
            message: "thanks for subscribing"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
 
export default Greet