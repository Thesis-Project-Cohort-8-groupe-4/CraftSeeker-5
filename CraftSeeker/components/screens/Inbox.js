import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Center } from 'native-base'
import { useEffect,useState } from 'react'
import axios from "axios"
import { TouchableOpacity } from 'react-native'
export default function Inbox() {
   const[chatrooms,setChatRooms] =useState([])

   useEffect(()=>{
    axios.get(`http://192.168.1.11:4000/chatboxes/getworkerinbox/20cf2af875f621f93dd91e52ff97942bfbb03ccd8cea6d58258121c9774cad77`)
    .then(res=>{
      setChatRooms(res.data)
    })
    .catch(err=>{
      console.log(err)})
   },[])
   console.log(chatrooms)


  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>

      <View style ={styles.titleContainer}> 
      <Text style = {styles.title}>Chat Box</Text>
      </View>

      <View style= {styles.chatroomsContainer}>
        <ScrollView>
      {chatrooms.length===0?
      <View>
      <Text style = {styles.noMessages}>You have no messages</Text>
      </View>
      :
        chatrooms.map((e,i)=>{
          return(
            <TouchableOpacity key ={i}>
            <View style ={styles.chatbox} >
             <Text style={styles.chatName}>{e.clientFirstName}</Text>
            </View>
            </TouchableOpacity>
        )})
      }
      </ScrollView>
      </View>
     
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  titleContainer:{
    backgroundColor: '#CCE5FF',
    paddingleft : 20,
    paddingTop:10,
    paddingBottom:10,
    paddingRight :10,
    borderRadius :10,
    justifyContent :"flex-start",
    flexDirection:"row",
    alignItems : "center",
  },
  noMessages:{
    fontSize:24,
    fontWeight :'bold',
    color :'#FF0000',
    textAlign : 'center',
    marginTop : 40,
  },
  container:{
     borderWidth: 17,
     height: 811,
     borderColor: "#036BB9",
     borderRadius: 10,
  },
  subContainer:{
     borderWidth: 17,
     height: 782,
     width: 382,
     borderColor: "white",
     borderRadius: 10,
     left: -2,
     top: -3,
     bottom: -3,
  },
  title:{
     textAlign: 'center',
     fontSize: 30,
     fontFamily: "Roboto",
     fontWeight:'bold',
     color: 'black',
     letterSpacing : 2,
     marginBottom :20,
     marginTop :20,
     marginLeft: 20,
  },
  chatroomsContainer:{
     flex: 1,
     marginTop: 20,
     borderRadius :10,
     borderColor : "#00A8B0",
     backgroundColor :  "#F5F5F5",
  },
  chatbox:{
     height: 100,
     marginBottom: 4,
     borderRadius: 10,
     backgroundColor: "#00A8B0",
     fontWeight: "bold",
     justifyContent:'center',

  },
  chatName:{
     fontSize: 20,
     marginLeft: 20,
     marginTop: 10,
     color: "white",
  },
})

