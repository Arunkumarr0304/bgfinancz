import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Back from "../../../assets/images/Back.svg";
import { Cabin_600SemiBold, Cabin_700Bold } from '@expo-google-fonts/cabin';
import CustomDropdown from '../../../components/Dropdown/Dropdown'; 
import { options } from '../../../components/Data/Data';
import Transfer_section2 from '../../../components/Transfer_section2/Transfer_section2';

const Transfer = () => {
  const [selectedValue, setSelectedValue] = useState(options[0]); // Initialize with placeholder

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Transfer</Text>
      </View>

      <CustomDropdown
        options={options}
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}
      />
      <Text style={styles.available}>Available balance : 10,000$</Text>
      <Transfer_section2 />
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: 'Cabin_700Bold',
  },
  available: {
    fontSize: 12,
    lineHeight: 16,
    color: '#3629B7',
    fontFamily: 'Cabin_600SemiBold',
    marginTop: 10,
  }
});