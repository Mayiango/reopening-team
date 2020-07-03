import React from 'react';
import './Header.css';
import Search from './Search';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactBootstrap, {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, Form, FormGroup, FormControl}  from 'react-bootstrap';


const Header = () =>{

    return (
        <Router>
            <div>
                <div className="Title"  >
                    <div>
                        <header role="banner" class="NavMain-Banner-module--cls2--Kiz5E NavMain-Banner-module-cls1--2T6rT text-light justify-content-center navbar navbar-expand navbar-dar">
                        <h1>WorldWide CoV19 Reopen Policy</h1>
                        </header>
                    </div>
                    <div>
                        <Link to="/about  " className="item"> About </Link>
                    
                        <Link to="/chatbot   " className="item"> Chatbot </Link>
                   
                        <Link to="/login   " className="item"> Login </Link>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </div>
                </div>
               
            </div>  
            <Switch>
                <Route path="chatbot">
                    Chatbot
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </Router>
        
    );
};


export default Header;


/*

<nav className="menu">
                      

                        <Navbar bg="light" expand="lg" >
                        <Navbar.Brand href="/about">About</Navbar.Brand>
                        <Navbar.Brand href="#chatbot">Chatbot</Navbar.Brand>
                        <Navbar.Brand href="#login">Login</Navbar.Brand>
                    </nav>*/
