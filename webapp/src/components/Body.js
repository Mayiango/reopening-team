import React from 'react';
import './Header.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import Chatbox from './Chatbox';
//import ReactBootstrap, {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, Form, FormGroup, FormControl}  from 'react-bootstrap';


const Body = () =>{

    return (    
        <Router>
            <div className="nav-bar">
                <Link to="/about" className="item" style={{padding: '10px' }}> About </Link>
                <Link to="/chatbox" className="item" style={{padding: '10px' }}>Chatbox </Link>
                <Link to="/search" className="item" style={{padding: '10px' }} >Search</Link>
                <Link to="/signin" className="item" style={{padding: '10px' }} >Sign In</Link>
            
            </div>
            <div className="Introduction">
                
                <p>
                    Human Coronavirus Type 
                </p>
                <p>
                    Coronaviruses include a group of RNA viruses that can cause diseases in mammals and birds. 
                </p>
                <p>
                    Coronaviruses are large, roughly spherical, particles with crown like spikes proteins on their surface. 
                    There are four main subgroups of coronavirus known as alpha, beta, gamma and delta.
                    Human coronaviruses including the novel coronavirus - CoV19 all are alphacoronavirus. 
                </p>           
                <p>
                    With the widespread of CoV19 worldwide,all countries have their own travel policies during this pandemic. 
                    Due to the vairation of spread in each country, all states or province of the countries may have different 
                    travel polices. 
                </p>
                <p>
                    To facilitate of travel policy search, we started this project to pull all travel policy together.
                </p>
                <p>
                    Be safe!     
                </p>  
            </div>
            <Switch>
                <Route path="chatbox">
                    Chatbox
                </Route>
                <Route path="/search">
                    <SearchPage />
                </Route>
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


