import React from 'react'
import styled from 'styled-components'

const Variable = () => {
    let bg = "Green"
    const Container = styled.div`
       background-color : ${bg};
      //  This is coming from themeProvider
       color : ${({theme}) => theme.color.textColor};  
       padding : 20px;
    `;
  return (
      <Container>
          <p> This is your Container</p>
    </Container>
  )
}

export default Variable