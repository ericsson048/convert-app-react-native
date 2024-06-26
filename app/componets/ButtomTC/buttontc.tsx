import { Text, TouchableOpacity, View } from "react-native"

function Buttontc({unit, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={s.buttom } >
        <Text style={s.text}>Convertir en {unit}</Text>      
    </TouchableOpacity>
  )
}
import { s } from "./buttontc.style"

export default Buttontc
