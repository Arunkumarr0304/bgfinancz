import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { last_transaction, transaction_tabs } from '../Data/Data';
import { Cabin_700Bold } from '@expo-google-fonts/cabin';
import { Lato_400Regular } from '@expo-google-fonts/lato';

const Transaction_section2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab1_container}>
            {
                transaction_tabs.map((d) => (
                    <TouchableOpacity style={styles.tab} key={d.id}>
                        <View style={styles.icon}>
                        {d.icon}
                        </View>
                        <View style={styles.text_column}>
                        <Text style={styles.price}>{d.price}</Text>
                        <Text style={styles.tab_text}>{d.text}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
      </View>
    </View>
  )
}

export default Transaction_section2;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    tab1_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        padding: 10,
        borderColor: '#BABABA',
        borderWidth: 1,
        borderRadius: 10,
    },
    icon: {
        backgroundColor: '#F6F6F6',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_column: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    price: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Cabin_700Bold',
        color: '#000000',
    },
    tab_text: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
    },
   
})