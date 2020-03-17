import React from 'react';
import './NavBar.css';
import { Link } from "react-scroll";
class About extends React.Component {
    render() { //defines visual part of component, executes any javascript code
        return (
            <header>
                <ul id="nav">
                    <li><Link
                    activeClass="active"
                    to= "Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {2000}>
                    Projects </Link></li>
                    <li><Link
                    activeClass="active"
                    to= "News"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {2000}>
                    News </Link></li>
                    <li><Link
                    activeClass="active"
                    to= "About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {2000}>
                    About </Link></li>
                    <li><Link
                    activeClass="active"
                    to= "Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {2000}>
                    Contact 
                    </Link></li>
                </ul>
            </header>
        );
        //or
        //return (bunch of stuff);
    }
}

export default About;


//every react component must include render
//must return one react element (a single markup item with any nested elements)
//should be a pure function, not change internal state of component
//should not directly interact with the browser (shouldnt contain statements that try to access the dom)