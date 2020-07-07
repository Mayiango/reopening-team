import React from 'react';
import api from '../API/api';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import ListDetail from './ListDetail';
import Search from './Search';
import { BrowserRouter,  Route } from 'react-router-dom';
import Header from './Header';
import Body from './Body';

//reference: https://reactrouter.com/web/example/basic

class App extends React.Component{
    state = {todos: [], selectItem: null};

    componentDidMount(){
      /*api.get('/').then(res =>{
        const todos = res.data;
        this.setState({todos });
      })*/
      this.onTermSubmit();
    }
   
    
    onTermSubmit = async term =>{
        const response = await api.get('/', {
          params: {name: term }
        });
        this.setState({
          todos: response.data,
          selectItem: response.data[term]
        }); 
    };
    
    onSelect = todo =>{
      this.setState({selectItem: todo});
    };
   
    render(){
        return (
          <div className="ui container" style={{marginTop: '10px'}}>
            <div className="Header"> 
              <h1><Header /></h1>
            </div>
            <div className="Body"><Body /></div>
            <div className="footer">
              <h6 className="footer">IBM Summer Project 2020</h6>
            </div>
          </div>
        );
    }
}

export default App;

