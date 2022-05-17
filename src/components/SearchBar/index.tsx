import * as React from 'react'
import { StyledTextInput, Container } from './style'

// Div   // p
function SearchBar () {
  const [value, setValue] = React.useState('')

  return (
        <Container>
            <StyledTextInput onChangeText={text => setValue(text)}
            placeholder="Buscar" // Ele deixa como exemplo o que tem que fazer
            value = {value}/>
        </Container>
  )
}

export default SearchBar
