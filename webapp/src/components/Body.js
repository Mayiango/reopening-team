import React from 'react';
import './Body.css';
import {NavLink, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import Chatbox from './Chatbox';
import ReactBootstrap, {Nav, Navbar, NavItem, selectKey, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, Form, FormGroup, FormControl}  from 'react-bootstrap';

import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';

const Body = () =>{

    return (    
        <Router>
            <div className="Header" >
                <h1 style={{padding: '40px'}}>
                     WorldWide CoV19 Reopen Policy
                </h1>
            </div>
            <Navbar >
                <Link to="/about" style={{margin: '10px'}} >About </Link>
                <Link to="/chatbot" style={{margin: '10px'}}>Chatbot</Link>
                <Link to="/search" style={{margin: '10px'}}>Search</Link>
                <Link to="/signin" style={{margin: '10px'}}>Sign In</Link>
                <Link to="/signup" style={{margin: '10px'}}>Sign Up</Link>
            </Navbar>
                
            <Switch>
                <Route path="/about" component={About }></Route>
                <Route path="/chatbox">
                    Chatbox
                </Route>
                <Route path="/search" component={SearchPage} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </Router>
                  
    );
};


export default Body;

/*
<Form inline >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>*/


/*<Nav.Item>
                    <NavLink href="/about" >About</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/chatbot" >ChatBot</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink href="/search" >Search</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink href="/signin" >Sign In</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink href="/signup" >Sign Up</NavLink>
                </Nav.Item>
                
                <header role="banner" class="NavMain-Banner-module--cls2--Kiz5E NavMain-Banner-module-cls1--2T6rT text-light justify-content-center navbar navbar-expand navbar-dar">
                <div style={{marginTop: "50px"}}>
                    WorldWide CoV19 Reopen Policy 
                </div>
            </header>*/