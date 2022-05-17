import * as React from 'react'
import { View } from 'react-native'
import { StyledTittle, StyledTextInput } from './style'

interface InputFieldProps {
  label : string
  value : string
  placeholder : string
  onChangeText : (string : string) => void
}

function InputField (props: InputFieldProps) {
  return (
    <View>
      <StyledTittle>{props.label}</StyledTittle>
      <StyledTextInput
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
      />
    </View>
  )
}

export default InputField
