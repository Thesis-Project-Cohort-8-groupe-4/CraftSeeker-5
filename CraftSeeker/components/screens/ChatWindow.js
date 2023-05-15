import { View, Text, Button, TouchableHighlight } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { TextInput,StyleSheet } from 'react-native'
import { io } from 'socket.io-client'
import { TouchableOpacity } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { Center, Divider } from "native-base";
export default function ChatWindow() {
  const  [messageText, setMessageText] = useState("")
  const  [uniqueId ,setUniqueId] = useState("")
  const  [messages,setMessages] = useState([])
  const [inputContainerHeight, setInputContainerHeight] = useState(0);

  const senderId ="74c87b397e47c119e2564682c3399a28a9fe010a8ef116cb53e31bcb8e5d5857" 
  const receiverId ="20cf2af875f621f93dd91e52ff97942bfbb03ccd8cea6d58258121c9774cad77"

  const socket = io("http://192.168.0.101:5000",{
    query :{uniqueId :"4d813b53-fd7e-48ff-81fe-217d74432e67"}
  })

  useEffect(()=>{
    socket.on("messages",(data)=>{
      setMessages(data)
      console.log(messages)
    })  
  },[]) 
  // add messages as a dependency
  
  const getDate=()=>{
    const date = new Date(); // create a new Date object for the current date and time
    const month = date.toLocaleString('default', { month: 'long' }); // get the month name
    const day = date.getDate(); // get the day of the month
    const year = date.getFullYear(); // get the year
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); // format the time in 12-hour clock with AM/PM
    const formattedDate = `${month} ${day}, ${year} at ${time}`; // create the formatted date string
     return formattedDate
}
  const handleMessageSending=()=>{
    const messageObj = {
      uniqueId :"4d813b53-fd7e-48ff-81fe-217d74432e67",
      senderId: "74c87b397e47c119e2564682c3399a28a9fe010a8ef116cb53e31bcb8e5d5857",
      receiverId :"20cf2af875f621f93dd91e52ff97942bfbb03ccd8cea6d58258121c9774cad77",
      createdAt : getDate(),
      messageText:messageText
    }
    if (messageObj.messageText.length){
      socket.emit("receive",messageObj)
    }
  }



  return (
    // <Center>
    <KeyboardAwareScrollView
     contentContainerStyle={{flexGrow: 1}} 
     extraHeight={100}
     keyboardShouldPersistTaps="handled"
    >
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style = {styles.titleContainer}>
        <Text style = {styles.title}> receiver name</Text>
        </View>
        <View>
          {messages.map((e, i) => {
            console.log(e.messageText);
            const isSent= senderId===e.sender
            const messageContainerStyle = isSent? styles.sentMessageContainer : styles.receivedMessageContainer
            const messageTextStyle = isSent? styles.sendMessageText : styles.receivedMessageText
            return (
              <View  key={i} style ={ messageContainerStyle} >
                <Text style ={messageTextStyle}>{e.messageText}</Text>
                <Text style ={styles.dateText}>{e.createdAt}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            title="message"
            onChangeText={text => setMessageText(text)}
            style={styles.input}
            value={messageText}
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleMessageSending}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </KeyboardAwareScrollView>
);
}

const styles = StyleSheet.create({
  dateText:{
    fontSize:12,
    color :'#999',
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 8,
    borderRadius: 20,
    marginVertical: 8,
  },
  sentMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#36C2FF',
    padding: 10,
    borderRadius: 20,
    marginVertical: 8,
    marginLeft: '20%',
  },
  receivedMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#A862A4',
    padding: 10,
    borderRadius: 20,
    marginVertical: 8,
    marginRight: '20%',
  },
  messageText: {
    fontSize: 'white',
  },
  sendMessageText: {
    color: 'black',
  },
  receivedMessageText: {
    color: 'black',
  },

  titleContainer: {
    backgroundColor: '#036BB9',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  container: {
    borderWidth: 17,
    height: 811,
    borderColor: '#036BB9',
    borderRadius: 10,
  },
  subContainer: {
    borderWidth: 17,
    height: 782,
    width: 382,
    borderColor: 'white',
    borderRadius: 10,
    left: -2,
    top: -3,
    bottom: -3,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    backgroundColor: '#f2f2f2',
    borderColor: '#ddd',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderRadius: 50,
  },
  input: {
    flex: 1,
    marginRight: 10,
    height: 40,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    width: 80,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});