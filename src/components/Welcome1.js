import React,{Component} from "react";

class Welcome1 extends Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name} a.k.a son of {this.props.father_name}</h1>
            </div>
        )
    }
}

export default Welcome1