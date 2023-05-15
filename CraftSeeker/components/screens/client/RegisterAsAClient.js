import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, ScrollView, Image, Alert, TouchableHighlight } from 'react-native';
import calendarImage from '../../../assets/calender.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';





const RegisterAsAClient = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
const [profilePictureUrl, setProfilePictureUrl] = useState('');
const [Url,setUrl] = useState('')

  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    imageUrl: ''
  });
 
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  
const handleSelectPicture = async () => {
  const cloudName = "dilwfvmbr"
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    const imageUri = result.uri;
    setProfilePicture(imageUri);

    const formData = new FormData();
    formData.append('profile-image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'profilePicture.jpg',
    });

    try {
      const response = await axios.post(
        'http://192.168.1.178:4000/api/clients/uploadFile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          } ,
          
        }  
      );
      console.log(response.data,"data")
      setUrl(response.data)
      const imageUrl = response.data;
      setProfilePictureUrl(imageUrl);

      console.log('Image uploaded successfully:', imageUrl);
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  }
};
const handleSignup = async () => {
   const cloudName = "dilwfvmbr"
  const { firstName, lastName, email, password, phoneNumber, address, dateOfBirth,imageUrl } = userInfo;

  if (userInfo.confirmPassword !== userInfo.password) {
    Alert.alert("Passwords Don't Match!");
  } else {
    try {
    
     
const obj= {
  clientFirstName: firstName,
  clientLastName: lastName,
  clientAdress: address,
  clientEmail: email,
  clientDateOfBirth: dateOfBirth,
  clientPhone: phoneNumber,
  clientPassword: password,
  imageUrl: JSON.stringify(Url),
}

      // Save the client details in the database
      const clientResponse = await axios.post('http://192.168.1.178:4000/api/clients/addclient',obj );
      console.log(obj,"dataaaa");
      const clientId = clientResponse.data.insertId;
      if (clientId) {
        navigation.navigate('Profil', { id: clientId });
      } else {
        console.log('Error creating client:', clientResponse.data);
      }
    } catch (error) {
      console.log('Error saving profile:', error);
    }
  }
};


  const handleInputChange = (name, value) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const showDatepicker = () => {
    setOpen(true);
  }

  const onDateChange = (event, selectedDate) => {
    setDate(selectedDate);
    setOpen(false);
    const isoString = selectedDate.toISOString();
    const year = isoString.substring(0, 4);
    const month = isoString.substring(5, 7);
    const day = isoString.substring(8, 10);
    const formattedDate = `${year}-${month}-${day}`;
    setUserInfo({ ...userInfo, dateOfBirth: formattedDate });
  };

  return (
    <View >
      
      <StatusBar backgroundColor="#4a90e2" barStyle="light-content" />
      <TouchableOpacity onPress={handleSelectPicture}>
  {profilePicture ? (
    <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
  ) : (
    <View style={styles.profilePicturePlaceholder}>
      <Text style={styles.profilePicturePlaceholderText}>Choose a Profile Picture</Text>
    </View>
  )}
</TouchableOpacity>



      <ScrollView onPress={()=> console.log('wfffw')} style={styles.scrollView}>
        <TextInput style={styles.input} placeholder="First Name" onChangeText={text => handleInputChange('firstName', text)} />
        <TextInput style={styles.input} placeholder="Last Name" onChangeText={text => handleInputChange('lastName', text)} />
        <TextInput style={styles.input} placeholder="Email Adress" keyboardType="email-address" onChangeText={text => handleInputChange('email', text)} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={text => handleInputChange('password', text)} />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} onChangeText={text => handleInputChange('confirmPassword', text)} />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="numeric" onChangeText={text => handleInputChange('phoneNumber', text)} />
        <TextInput style={[styles.input, { marginBottom: 5 }]} placeholder="Address" onChangeText={text => handleInputChange('address', text)} />
        {/* DATE */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Select Date Of Birth</Text>
          <TouchableOpacity style={styles.button} onPress={showDatepicker} >
            <Image source={calendarImage} style={styles.calendarIcon} />
          </TouchableOpacity>
          {open && (
            <DateTimePicker
              display="calendar"
              mode="date"
              value={date}
              onChange={onDateChange}
            />
          )}
        </View>
        <TouchableHighlight
          style={{ flex: 1, alignSelf: "center", backgroundColor: '#83b5ed', width: "40%", borderRadius: 10, height: 30, justifyContent: "center" }}
          activeOpacity={0.6}
          underlayColor="#24b9e6"
          onPress={handleSignup} >
          <Text  style={{ textAlign: "center" }}>Submit</Text>

        </TouchableHighlight>
 
      </ScrollView>



    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  scrollView: {
    // marginVertical: 15,
   
  },
  title: {
    color: '#0386D0',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: '15%',
    marginRight: '15%',
    textAlign: 'center',
  },
  input: {
    marginVertical: 7,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    height: 40,
    borderColor: '#dedede',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  datePickerContainer: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picker: {
    width: '30%',
  }
})

export default RegisterAsAClient;
