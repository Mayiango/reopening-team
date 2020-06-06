import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';
//import ResultsList from './ResultsList';




class App extends React.Component{
    
    state = {text: [] };

    onSearchSubmit = async term =>{
        const response = await unsplash.get('/serach/photos', {
            params: { query: term},
        });

        this.setState({text: response.data.results}); 
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
               // <ResultsList text={this.state.text} />

        );
    }
};

export default App;