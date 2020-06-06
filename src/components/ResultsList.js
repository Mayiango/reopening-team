import './reopen.css';
import React from 'react';


const ResultsList = props =>{

    const query_results = props.data.map(({description, id, urls}) =>{
        return (
            <div key={id} >
               <text alt={description} src={urls.regular} />
            </div>
        )
    });
    return <div> {query_results} </div>;
}


export default ResultsList;