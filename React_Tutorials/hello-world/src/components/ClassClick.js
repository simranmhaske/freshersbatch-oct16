import React,{ Component } from 'react';

class ClassClick extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    clickHandler(){
        console.log("Click button")
        this.setState=({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>ClickMe {this.state.count}</button>
            </div>
        )
    }
}

export default ClassClick