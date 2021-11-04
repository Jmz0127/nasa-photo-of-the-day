import React from 'react';
import styled from 'styled-components';

// THIS IS THE CHILD

const StyledPic = styled.div`
  width: 90.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:5%;
  background-color: lightskyblue;

h1 {
font-size: 35px;
text-decoration: underline;
font-family: Herculanum;
color: purple;
}


h2 {
font-size: 25px;
font-family: fantasy;
}


p {
font-size: 12px;
padding-top: 10px;
font-style: italic;
font-family: monospace;
  }


img {
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

`

const Pic = (props) => {
    return (     
        <StyledPic>
            <h1>{props.data.title}</h1>
            <h2>{props.data.copyright}</h2>
            <h2>Date: {props.data.date}</h2>
            <img src={props.data.url} alt='space' />
            <p>{props.data.explanation}</p>
        </StyledPic>
    )
}

export default Pic;