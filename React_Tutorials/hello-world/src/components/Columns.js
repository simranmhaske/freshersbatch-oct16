import React, { Component } from 'react'

class Columns extends Component{
    constructor(props){
        super(props)

        this.state={
            message:'Hello'
        }
    }

    changeMessage(){
        
         this.setState({
             message:'Welcome'
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.changeMessage()}>Click</button>
            </div>
        )
    }
}
export default Columns