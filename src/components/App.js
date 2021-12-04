import React from 'react'
import styled from 'styled-components'
import Chat from './Chat.js'

const StyledHeader = styled.h2`
  color: blue;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <StyledHeader>Hello World</StyledHeader>
        <Chat />
      </>
    )
  }
}

export default App
