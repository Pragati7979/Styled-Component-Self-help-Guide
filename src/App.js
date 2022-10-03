import React from 'react'
import GlobalStyle from './GlobalStyle';
import Nested from './Nested';
import PropsHandling from './PropsHandling';
import Simple from './Simple';
import Variable from './Variable';
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = {
    color : {
      textColor: "red",
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Simple/>
      <Nested />
      <Variable />
      <PropsHandling/>
    </ThemeProvider>
  )
}


export default App;