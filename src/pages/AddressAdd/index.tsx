import * as React from 'react'
import InputField from '../../components/InputField'

function SubAddress () {
  // const [name, setName] = React.useState('')
  const [rua, setRua] = React.useState('')
  // const [email, setEmail] = React.useState('')
  // const [phone, setPhone] = React.useState('')
  return (
    <InputField label='Rua' value={rua} onChangeText={setRua} placeholder='Exemplo: Rua do Milho Verde'/>
  )
}

export default SubAddress
