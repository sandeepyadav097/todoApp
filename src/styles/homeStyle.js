import { Dimensions, StyleSheet } from "react-native";

export const appStyle = StyleSheet .create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      color: 'black',
      justifyContent:'center',
      backgroundColor:'#999'
    }
  });
 

  
export const homeStyle = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#dbd9d9',
    },
    nothing:{
      position:'absolute', top:Dimensions .get('window').height/2-50, right:Dimensions.get('window').width/2 -50, opacity:0.5},
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:7,
    },
    headerText:{
        fontSize:40,
        color:'black',
        fontWeight:'bold',
    },
    headerButton:{
      flexDirection:'row'
    },
    list: {marginBottom:'15%'},
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor:'#dbd9d9'
    }})  

export const taskStyles= StyleSheet.create({
    text: {
      color: 'black',
      fontSize: 20,
    },
    taskStyling: {
      //borderColor: 'red',
      flexDirection: 'row',
      //borderWidth: 1,
      borderRadius: 10,
      margin: 10,
      flex: 1,
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-between',
      shadowColor: 'black',
  shadowOpacity: 0.9,
  shadowOffset: { width: 0, height: 20},
  shadowRadius: 10,
  elevation: 7,
  backgroundColor: 'white'
    },
    left:{
      flex:1
    },
    right: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      margin: 5,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      color:'black',
      textAlign: "center"
    }
  })    


export const inputStyles = StyleSheet.create({
    inputField: {
      height: 40,
      borderBottomWidth: 1,
      color: 'black',
      flex: 0.8,
      margin:10
    },
    inputView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginLeft:5,
        marginRight:5
      },
  })  


  export const ButtonStyle= StyleSheet.create({
    width:'50%'
  })