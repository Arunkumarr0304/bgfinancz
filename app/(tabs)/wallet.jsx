import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import Back from "../../assets/images/Back.svg";
import { Cabin_700Bold } from '@expo-google-fonts/cabin';
import { router } from "expo-router";
import Card2 from "../../assets/images/Card2.png";  // Ensure this path is correct
import Wallet_section2 from '../../components/Wallet_section2/Wallet_section2';
import Common_tabs from '../../components/Tabs/common_tabs';

const screenWidth = Dimensions.get('window').width;

const Wallet = () => {

  const back = () => {
    router.push('home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.heading}>Wallet</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={Card2} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.name_head}>name</Text>
              <Text style={styles.name}>Satoru Gojo</Text>
              <View style={styles.card_row}>
                <Text style={styles.cardNo}>4756 .... .... 9018</Text>
                <Text style={styles.expire}>11/24</Text>
              </View>
              <Text style={styles.balance_head}>balance</Text>
              <Text style={styles.balance}>$3,469.52</Text>
            </View>
          </View>
        </View>
      </View>
      <Wallet_section2 />
      <Text style={styles.transaction}>transaction</Text>
      <Common_tabs />
      </ScrollView>
    </View>
  );
}

export default Wallet;

const styles = StyleSheet.create({
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
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingRight: 55,
  },
  item: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: screenWidth * 0.85,
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
  },
  name_head: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Cabin_400Regular',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  name: {
    fontSize: 24,
    lineHeight: 29,
    fontFamily: 'Cabin_700Bold',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  type: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Cabin_500Medium',
    color: '#ffffff',
    textTransform: 'capitalize',
    marginTop: 15,
  },
  card_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 4,
  },
  cardNo: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#ffffff',
  },
  expire: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#ffffff',
  },
  balance_head: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Cabin_400Regular',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  balance: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: 'Lato_700Bold',
    color: '#ffffff',
  },
  transaction: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Cabin_700Bold',
    color: '#000000',
    textTransform: 'capitalize',
  }
});
