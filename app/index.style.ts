import { StyleSheet } from "react-native";


 export const s = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20
    },
    container:{
        display:"flex",
        flexDirection:"column",
        height:450,
        width:"100%",
        padding:10,
        borderRadius:10,
        shadowColor:"black",
        alignItems:"center",
        justifyContent:"space-evenly",
    }
})