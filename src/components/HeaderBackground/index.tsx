import React from 'react'
import { View } from 'react-native'

import styles from './styles'

function HeaderBackground () {
  return (
    <View style={styles.cotainer}>
      <View style={styles.blank}></View>
      <View style={styles.curve}></View>
    </View>
  )
}

export default HeaderBackground
