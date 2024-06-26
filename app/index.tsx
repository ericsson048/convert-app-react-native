import { Image, StyleSheet, Platform, Text, ImageBackground, ImageBackgroundBase, View } from 'react-native';
import {s} from './index.style';
import hot from '@/assets/images/hot.png';
import cold from '@/assets/images/cold.png';
import TemperatureDisplay from './componets/temperatureDisplay/temperatureDisplay';
import { useEffect, useState } from 'react';
import InputTamp from './componets/inputTemperature/input';
import {Default_Value,Unit,Default_Unit } from "../constants/constant"
import { convertTempTo, getOpposityT, isIceT } from '@/services';
import Buttontc from './componets/ButtomTC/buttontc';



export default function HomeScreen() {
  const [value, setValue] =useState(Default_Value);
  const [inputT,setInpuT]= useState(Default_Unit)
  const [backGround,setBackGround]= useState()
  const opposite =getOpposityT(inputT)
  const getConv = ()=>{
    const temp = Number.parseFloat(value)
    if(isNaN(temp)){
      return "";
    }
    else{
      return convertTempTo(opposite,temp).toFixed(1)
    }
  }

  useEffect(()=>{
    const temp = Number.parseFloat(value)
    !isNaN(temp)&& setBackGround(isIceT(inputT,temp)?cold:hot)
  },[value])

  return (
    <ImageBackground source={backGround} style={s.main}>
      <View style={s.container}>
        <TemperatureDisplay value={getConv()} unit={opposite} />
        <InputTamp  defaultValue={Default_Value} onChangeText={setValue} unit={inputT}/>
        <Buttontc onPress={()=>{setInpuT(opposite)}} unit={opposite}/>

      </View>
    </ImageBackground>
    
  );
}

