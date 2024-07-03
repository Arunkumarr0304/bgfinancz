import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Root_layout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name='index' />
    <Stack.Screen name='(auth)' />
    <Stack.Screen name='(tabs)' />
    <Stack.Screen name='(screens)' />
  </Stack>
  
  )
}

export default Root_layout;

const styles = StyleSheet.create({})