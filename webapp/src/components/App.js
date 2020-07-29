import React from 'react';
import api from '../API/api';
import Body from './Body';
import background from '../assets/background.jpg';
import './App.css';

//reference: https://reactrouter.com/web/example/basic

class App extends React.Component{
    state = {todos: [], selectItem: null};

    componentDidMount(){
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
            <div class="title" >
              Worldwide CoV19 Reopen Policy 
              <div>
                <p style={{fontSize: '8px', textAlign: 'right'}} >source: "https://www.district4health.org/services/community-health/covid-19/"</p> 
            </div>
            </div>
            
            <div class="body"><Body /></div>
            
          </div>
        );
    }
}

export default App;

