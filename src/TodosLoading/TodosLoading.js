import React from 'react';
import ReactLoading from 'react-loading';
import "./TodosLoading.css"

function TodosLoading () {
    return (
        <div className='container_loading'>
            <ReactLoading type="spinningBubbles" color="black" height="200px" width="200px" />
        </div>
    )
}

export { TodosLoading }

