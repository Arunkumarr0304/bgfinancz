import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Back from "../../../assets/images/Back.svg";
import { Cabin_700Bold } from '@expo-google-fonts/cabin';
import Scan from "../../../assets/images/scan.svg";
import Profile from "../../../assets/images/profile_image.png";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import Qr_code from "../../../assets/images/Qr_codeoriginal.png";
import Button from '../../../components/Button/Button';
import { router, Link } from "expo-router";

const Qrcode = () => {

  const scan = () => {
    router.push('/Scan/Scan');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
        <Back />
        <Text style={styles.heading}>QR Code</Text>
        </View>
        <TouchableOpacity style={styles.scan} onPress={scan}>
          <Scan width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.profile_row}>
        <Image source={Profile} alt='image' style={styles.profile} />
        <Text style={styles.profile_text}>Satoru Gojo</Text>
      </View>
      <Text style={styles.code_text}>Scan This Code To Pay</Text>
      <View style={styles.code_content}>
        <Image source={Qr_code} alt='image' style={styles.code} />
      </View>
      <Button buttonText="scan" onPress={scan} />
    </View>
  )
}

export default Qrcode;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 200,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 30,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Cabin_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    header_left: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    scan: {
      backgroundColor: '#0890FE',
      borderRadius: 8,
      padding: 10,
    },
    profile_row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      marginTop: 40,
      borderBottomColor: '#757575',
      borderStyle: 'dashed',
      borderBottomWidth: 1,
      marginHorizontal: 20,
      paddingBottom: 10,
    },
    profile: {
      width: 70,
      height: 70,
    },
    profile_text: {
      fontSize: 24,
      lineHeight: 34,
      fontFamily: 'Cabin_700Bold',
      color: '#121212',
      textTransform: 'capitalize',
    },
    code_text: {
      textAlign: 'center',
      marginVertical: 25,
      fontSize: 14,
      lineHeight: 24,
      fontFamily: 'Lato_400Regular',
      color: '#474747',
    },
    code_content: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
    },
    code: {
      width: 250,
      height: 250,
      paddingTop: 10,
    },
})