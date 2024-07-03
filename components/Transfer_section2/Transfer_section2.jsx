import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Cabin_700Bold } from '@expo-google-fonts/cabin';

const Transfer_section2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Transaction</Text>
    </View>
  )
}

export default Transfer_section2;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Cabin_700Bold',
        color: '#000000',
        textTransform:  'capitalize',
    }
})