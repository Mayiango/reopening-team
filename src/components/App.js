import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component{
    state = {text: ' ' };

    /*onSearchSubmit = async term =>{
        const response = "get results" ;//add path to get info 
        params: {query: term};
    };

    this.setState({text: response.data.results}); //check this later */

}

render(){
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />

        </div>
    );
}

export default App;