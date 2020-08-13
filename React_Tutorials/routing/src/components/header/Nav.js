import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div>
                 <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/project">PROJECTS</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="contact">CONTACT</Link></li>
                </ul>
            </div>
        )
    }
}
export default Header