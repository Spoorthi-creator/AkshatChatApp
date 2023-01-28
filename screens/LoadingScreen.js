import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {auth} from '../firebase';

import { useNavigation } from '@react-navigation/core'
import{ useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";

export default function Loading ({navigation}) {
 

 

  useEffect(() => {
   
  onAuthStateChanged(auth,(user) => {
          
      if (user) {
        
      navigation.navigate('Chats')
       
        // ...
      }
      else{
       navigation.navigate('Login')
      } 
    });
      
   
      
   
  }, [])
    


}



const styles = StyleSheet.create({})