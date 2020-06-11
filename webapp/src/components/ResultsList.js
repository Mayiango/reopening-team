//import './ResultsList.css';
import React from 'react';
//import ListItem from './ListItem';


const ResultsList = ({ todos, selectItem }) =>{
        console.log(selectItem);
        const renderedList = todos.map(todo =>{
                return (
                    <div>
                        <span>{todo.id}</span>
                        <span >{todo.name}   </span>
                        <span >{todo.description}</span>
                    </div>
                );
           //}
            
        });
        
    return <div className="ui list"> {renderedList} </div>;
};

export default ResultsList;

// <ListItem key={todo.id} onSelect={onSelect} todo = {todo} />