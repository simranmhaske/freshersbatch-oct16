import React, { Component } from 'react';
import Home from './section/Home';
import Project from './section/Project';
import Services from './section/Services';
import Contact from './section/Contact';
import {Route} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <section>
                <Route path="/" component={Home} exact/>
                <Route path="/project" component={Project} exact/>
                <Route path="/services" component={Services} exact/>
                <Route path="/contact" component={Contact} exact/>
            </section>
        )
    }
}
export default Header