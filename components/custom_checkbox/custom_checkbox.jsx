import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomCheckbox = ({ isChecked, onToggle }) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onToggle}>
      <Text style={[styles.checkbox, isChecked && styles.checked]}>{isChecked ? '✔️' : ''}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    fontSize: 18,
    color: '#000',
   
  },
  checked: {
    color: '#3629B7', 
  },
});

export default CustomCheckbox;
