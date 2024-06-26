import {Unit} from '@/constants/constant'

export const getOpposityT =(vlu)=>{
    return vlu === Unit.celcius ? Unit.fahrenheit : Unit.celcius;
}
export const convertTempTo =(unit, value)=>{
        if(unit===Unit.celcius){
            return (value-32)*5/9;
        }else{
            return (value*9/5)+32;
        }
}

export const isIceT =(unit,value)=>{
    if(unit===Unit.celcius){
        return value<=0;
    }else{
        return value<=32;
    }

}