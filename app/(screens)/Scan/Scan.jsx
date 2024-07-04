import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Back from "../../../assets/images/Back.svg";
import Code from "../../../assets/images/Qr_scan.svg";
import { router } from "expo-router";
import { Cabin_700Bold } from '@expo-google-fonts/cabin';
import QRScanner from '../../../components/Qr_scanner/Qr_scanner';

const Scan = () => {
  const scans = () => {
    router.push('/Qr_code/Qr_code');
  };

  const handleScanned = ({ type, data }) => {
    Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          <TouchableOpacity onPress={scans}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.heading}>Scan</Text>
        </View>
        <TouchableOpacity style={styles.scan} onPress={scans}>
          <Code width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.scanner_container}>
        <QRScanner onScanned={handleScanned} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_left: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 30,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: 'Cabin_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  scan: {
    backgroundColor: '#0890FE',
    borderRadius: 8,
    padding: 10,
  },
  scanner_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Scan;
