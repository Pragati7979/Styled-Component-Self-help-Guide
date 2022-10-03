import React from 'react'
import styled from 'styled-components'
import './Nested.css'

const Nested = () => {
  
    const Button = styled.button`
    display : flex;
    align-items : center;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    // This will work as .btn:hover , & represents the current calling tag

    &:hover{
        color : red;
        font-size : 2rem;
        cursor : pointer;
    }
    
    //You can easily give css in heirarchy
    span{
        b{
            color : black;
            font-weight : bold;
        }
    }
  `;

  return (
      <div>
        <Button>Subscribe <span>my <b>channel</b></span></Button>    
      </div>
  )
}

export default Nested;