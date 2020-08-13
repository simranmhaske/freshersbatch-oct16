import React, { Component } from 'react'
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            Username:'',
            Comments:'',
            Topics:'React'
        }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            Username:event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            Comments:event.target.value
        })
    }
    handleTopicsChange=(event)=>{
        this.setState({
            Topics:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.Username} ${this.state.Comments} ${this.state.Topics} submitted`)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={this.state.Username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea value={this.state.Comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic:</label>
                    <select value={this.state.Topics} onChange={this.handleTopicsChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}
export default Form