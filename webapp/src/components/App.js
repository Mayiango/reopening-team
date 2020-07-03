import React from 'react';
import api from '../API/api';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import ListDetail from './ListDetail';
import Search from './Search';
import { BrowserRouter,  Route } from 'react-router-dom';
import Header from './Header';



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
            <div> 
              <h1><Header /></h1>
            </div>
            <div className="body-content">
              <h3>
                <p>
                  Due to CoV19, different cout4ries has their own reopen policy
                </p>
              </h3>
            </div>
            <div className="footer">
              <footer>

              </footer>
            </div>
          </div>
        );
    }
}

export default App;

