import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, {useState} from 'react';
import Back from "../../assets/images/Back.svg";
import { Cabin_700Bold } from '@expo-google-fonts/cabin';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { duration_data, last_transaction } from '../../components/Data/Data';
import Progressive from '../../components/Progressive/Progressive';
import Transaction_section2 from '../../components/Transaction_section2/Transaction_section2';
import { router, Link } from "expo-router";
import Common_tabs from '../../components/Tabs/common_tabs';

const Transaction = () => {
 
  return (
    <View style={styles.transaction_page}>
    <View style={styles.container}>
        <View style={styles.header}>
          <Back />
          <Text style={styles.heading}>Transactions</Text>
        </View>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Progressive />
        <Transaction_section2 />
    <View style={styles.transaction_section}>
        <Text style={styles.heading2}>Transaction</Text>
        <Common_tabs />
      </View>
      </ScrollView>
      </View>
  )
}

export default Transaction;

const styles = StyleSheet.create({
  transaction_page: {
    backgroundColor: '#ffffff',
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: 'Cabin_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  transaction_section: {
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 24,
    padding: 20,
},
heading2: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Cabin_700Bold',
    color: '#000000',
    textTransform: 'capitalize',
},

})