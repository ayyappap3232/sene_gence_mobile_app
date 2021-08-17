import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Navigator from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({})