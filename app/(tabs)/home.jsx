import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React from 'react';
import Profile from "../../assets/images/home_profile.png";
import Notification from "../../assets/images/Notification.svg";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Cabin_700Bold } from '@expo-google-fonts/cabin';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
            <Image source={Profile} alt='image' style={styles.profile} />
            <View style={styles.left_content}>
                <Text style={styles.heading}>Good Morning</Text>
                <Text style={styles.name}>Hi, Satoru Gojo</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.Notification}>
        <Notification />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    profile: {
        width: 50,
        height: 50,
    },
    left_content: {
        gap: 3,
    },
    Notification: {
        backgroundColor: '#FFAF2A',
        borderRadius: 8,
        padding: 10,
    },
    heading: {
        fontSize: 14,
        lineHeight: 17,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        textTransform: 'capitalize',
    },
    name: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Cabin_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    }
})