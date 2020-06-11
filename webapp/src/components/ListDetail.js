import React from 'react';

const ListDetail = ({ todo }) =>{
    if(!todo)
    {
        return <div>Loading...</div>;
    }

    const listSrc = `http://127.0.0.1:8000/api/${todo.id}`;

    return (
        <div>
            <div className="ui segment">
                <h4>{todo.name}</h4>
                <p>{todo.description}</p>
            </div>
        </div>
    );
};

export default ListDetail;