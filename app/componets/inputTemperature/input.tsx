import { s } from '@/app/componets/inputTemperature/input.style'
import React from 'react'
import { Text, TextInput, View } from 'react-native'


function InputTamp({defaultValue,onChangeText,unit}) {
  return (
    <View style={s.container}><TextInput style={s.input} placeholder='entre un temperature' keyboardType="numeric" maxLength={4} defaultValue={defaultValue} onChangeText={onChangeText}/>
    <Text style={s.text}>{unit}</Text>
    </View>
      
  )
}

export default InputTamp
