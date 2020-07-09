import React from "react";
import {Navbar, NavItem} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import NavBar from "./components/NavBar";
import aboutMeHeader from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Portfolio from "./components/Portfolio";
import LinkedIn from "./components/LinkedIn";
import GitHub from "./components/GitHub"
import Footer from "./components/Footer";
import "../src/App.css";


function App() {
    return (
        <div>
            <Router>
                <Navbar className="justify-content-end mr-3 p-3 myNavBar">
                <NavItem><Link to="/">AboutMe | </Link></NavItem>
                <NavItem><Link to="/portfolio">  Portfolio | </Link></NavItem>
                <NavItem><Link to="/contact-me">Contact | </Link></NavItem>
                <NavItem><Link to="https://www.linkedin.com/in/anthony-guerrero-63a3a8199/">LinkedIn | </Link></NavItem>
                <NavItem><Link to="/GitHub">GitHub </Link></NavItem>
                </Navbar>
                {/* <Route  component={NavBar} /> */}
                <Route exact path="/" component={aboutMeHeader} />
                <Route exact path="/contact-me" component={ContactMe} /> 
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="https://www.linkedin.com/in/anthony-guerrero-63a3a8199/" className="linkIn" component={LinkedIn} />
                <Route exact path="/GitHub" component={GitHub} />
                <Route component={Footer} />
            </Router>
        </div>



    )
};

export default App;

