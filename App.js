import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { HomePage } from './src/navigation/HomeNavigation';
import { NewUser } from './src/context/userContext';







export default function App() {

  const newUser  = useContext(NewUser);
  
  return (
    <HomePage />
  )
}
