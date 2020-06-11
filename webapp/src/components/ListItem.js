import React from 'react';


const ListItem = (todo, onSelect) =>{
    return (
        <div onClick={() => onSelect(todo)} className="list-item" style={{margin: '1cm'}}>
            <div>{todo.name}</div>
            <div>{todo.description}</div>
        </div>
    );
};

//<div>{todos.name}</div>
export default ListItem;