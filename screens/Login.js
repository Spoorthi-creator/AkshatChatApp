import React, { useState } from 'react';
import { View, StyleSheet,ImageBackground ,Dimensions,Text,TouchableOpacity,} from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const  screenheight  = Dimensions.get("window").height;
const SPACING=10;



export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openRegisterScreen = () => {
      navigation.navigate('Register');
    };

    const LoggedIn = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Registered
              const user = userCredential.user;
              
                alert('Welcome');
                navigation.navigate("Chats");
              })
              .catch((error) => {
                  alert(error.message);
              })
          
      }



    return (
        <KeyboardAwareScrollView style={{flex:1}}>

        <ImageBackground source={require('../assets/Flash.png')} style={{ 
          height: screenheight,
          
         
           }}>
            </ImageBackground>
            <View style={{
      
     
      marginTop: -SPACING * 32,
      height:400,
      borderTopEndRadius:50,
     
      backgroundColor: 'white'}}>

            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop:'3%', color: '#064663' ,alignItems:'center',alignSelf:'center'}}>Enjoy the new experiences of chating with</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold',color: '#064663' ,alignItems:'center',alignSelf:'center'}}> friends globally</Text>

            <Text style={{ fontSize: 15, alignItems:'center',alignSelf:'center', fontWeight: 'bold', marginLeft: '10%', marginTop: '5%', color: 'grey' }}>Connect people around the world for free</Text>
            
      
            <Input
                placeholder='Enter your email'
              
                leftIcon={{ type: 'material', name: 'email',size:18 }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
               
                leftIcon={{ type: 'material', name: 'lock',size:18 }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
             <TouchableOpacity style={{ width: '60%', height:30, backgroundColor: '#FAAB78', justifyContent: 'center', alignItems: 'center', borderRadius: 5, alignSelf: 'center', }} onPress={LoggedIn }>
                        <Text style={{ fontWeight: 'bold', color: '#064663', fontSize: 20 }}>SignIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{alignSelf:'center',marginTop:15}} onPress={ openRegisterScreen}>
                    <Text style={{ fontWeight: 'bold', color:"#064663", fontSize: 15,borderRadius:10 }} >Not an user? Sign up</Text>
                    </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
       
    )
}
const styles = StyleSheet.create({
  
   
});

