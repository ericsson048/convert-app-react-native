import { Text, View } from "react-native";
import { s } from "./tamperatureDisplay.style";
import React from 'react'

function TemperatureDisplay({unit,value}) {
  return (
    <View>
     <Text style={s.text}> {value}{unit}</Text>
    </View>
  )
}

export default TemperatureDisplay
