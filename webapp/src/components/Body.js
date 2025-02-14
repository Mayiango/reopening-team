import React from 'react';
import './Body.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import  {Navbar }  from 'react-bootstrap';
import ValidateSignIn from './ValidateSignIn';
import SignUp from './SignUp';
import About from './About';
import './Body.css';

const Body = () =>{

    return (    
        <Router>
            
            <Navbar >
                <Link to="" ></Link>
                <Link to="/about"  style={{margin: '10px'}} >About </Link>
                <Link to="/search" style={{margin: '10px'}}>Search</Link>
                <Link to="/signin" style={{margin: '10px'}}>Sign In</Link>
                <Link to="/signup" style={{margin: '10px'}}>Sign Up</Link>
            </Navbar>
                
            <Switch>
                <Route path="/about" component={About } />
                <Route path="/search" component={SearchPage} />
                <Route path="/signin"><ValidateSignIn /></Route>
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