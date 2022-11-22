import React,{Component} from "react";


class Counter extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0,
        number: "NULL"
      }
    }

    check(){
        let h = this.state.count
        let g = "odd"
        if(h%2==0){
            g="even"
        }
        else{
            g="odd"
        }
        this.setState({
            number:g
        })
    }
    increment(){
        this.setState({
            count:this.state.count + 1
        },()=>{
            console.log("count is " , this.state.count)
            this.check()
        })
        // this.check()
        console.log(this.state.count)
    }

    render(){
        return(
            <div>
                <div>
                    <h1>count- {this.state.count}</h1>
                    <h1>number is {this.state.number}</h1>
                    <button onClick={()=>this.increment()}>Increase</button>
                    <button onClick={()=>this.check()}>check</button>
                </div>
            </div>
        )
    }
}

export default Counter