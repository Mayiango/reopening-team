import React from 'react';
import api from '../API/api';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import ListDetail from './ListDetail';


class Search extends React.Component{
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
            <SearchBar  onFormSubmit={this.onTermSubmit} />
            <ListDetail todo={this.state.selectItem} />
            <ResultsList onSelect={this.onSelect} todos={this.state.todos} />
          </div>
        );
    }
}

export default Search;

