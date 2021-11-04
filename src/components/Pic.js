import React from 'react';

// THIS IS THE CHILD

const Pic = (props) => {
    return (     
        <div>
            <h1>{props.data.title}</h1>
            <h2>{props.data.copyright}</h2>
            <h2>Date: {props.data.date}</h2>
            <img src={props.data.url} alt='space' />
            <p>{props.data.explanation}</p>
        </div>
    )
}

export default Pic;