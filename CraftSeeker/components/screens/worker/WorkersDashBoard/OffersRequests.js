import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-native-elements'
import { Alert } from 'react-native'
import { io } from 'socket.io-client'
const socket = io("192.168.104.27:5000") 
export default function OffersRequests() {
  const [offers , setOffers] = useState([])
  const [workerId ,setWorkerId] = useState("")
 
  useEffect(()=>{
   axios.get("http://192.168.104.27:4000/api/tasks/getworkeroffers/9")
   .then((res)=>{
    setOffers(res.data)
    console.log(offers)
   })
   .catch(err=>{
    console.log(err)
   })
  },[])

  
  

  

  const handleAcceptance=(id)=>{

       axios.put(`http://192.168.104.27:4000/api/tasks/changetaskstatus/${id}`,{taskStatus:"in Progress"})
       .then(results=>{
        console.log(results)
        Alert("you have accepted this request")
       })
       .catch(err=>{
         console.log(err)
         Alert("you have an error in the status change")
       })
  }

  const handleDenial =()=>{
    axios.put(`http://192.168.104.27:4000/api/tasks/changetaskstatus/${id}`,{taskStatus:"denied"})
    .then(results=>{
     console.log(results)
     Alert("you have denied this request")
    })
    .catch(err=>{
      console.log(err)
      Alert("you have an error in the status change")
    })

  }
  
  return (
    <View style ={styles.container}>
        <View style ={styles.subContainer}>
        <View>
          <Text>Offers Requests</Text>
      </View>
      <View>
       { offers.map((e,i)=>{
        return(
            <View id = "offers" key = {i}>
            <Text>Client: {e.clientFirstName} {e.clientLastName} </Text>
            <Text>Request : {e.taskTitle}</Text>
            <Text>description:{e.taskText}</Text>
            <Button title= "accept" buttonStyle ={styles.accept} containerStyle={styles.buttonSpacing} onPress={handleAcceptance} ></Button>
            <Button  buttonStyle ={styles.deny} title="deny" containerStyle={styles.buttonSpacing} onPress={handleDenial}></Button>
        </View>
        )})}
      </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      borderWidth: 17,
      height: 811,
      borderColor: "#036BB9",
      borderRadius: 10,
    },
    subContainer: {
      borderWidth: 17,
      height: 782,
      width: 382,
      borderColor: "white",
      borderRadius: 10,
      left: -2,
      top: -3,
      bottom: -3
    },
    title: {
      color: "black",
      flex: 1,
      textAlign: 'center',
      fontSize: 30,
      fontFamily: "Roboto",
      fontWeight: "400",
    },
    deny: {
      width: 100,
      backgroundColor: '#FF0000',
    },
    accept: {
      width: 100,
      backgroundColor: 'green'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    buttonSpacing: {
      marginBottom: 12,
      marginRight: 5,
      marginLeft: 5,
    }
  })

