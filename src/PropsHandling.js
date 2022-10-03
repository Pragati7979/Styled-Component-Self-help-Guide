import React from 'react'
import styled from 'styled-components'

const PropsHandling = () => {
    
    const Container = styled.div`
       background-color : ${(props)=>props.bgColor};
       color : white;
       padding : 20px;
       margin : 5px;
    `;
    return (
        <Container bgColor = "pink">
            <p> This is your PropsHandling</p>
        </Container>
    )
}

export default PropsHandling