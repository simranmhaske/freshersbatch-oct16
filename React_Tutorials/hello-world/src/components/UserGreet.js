import React,{ Component } from 'react';

class UserGreet extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false
        }
    }
    render(){
        return this.state.isLoggedIn && <div>Welcome Simran</div>

        {/*====================*/}
        // return(
        // this.state.isLoggedIn?
        // <div>Welcome Simran</div>:
        // <div>Welcome Guest</div>
        // )
         {/*====================*/}
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Simran</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return message
         {/*====================*/}
    //     if(this.state.isLoggedIn){
    //         return <div>Welcome Simran</div>
    //     }else{
    //         return <div>Welcome Guest</div>
    //     }
    }
}

export default UserGreet