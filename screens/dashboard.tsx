import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, SocialIcon, ButtonGroup } from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

type DashboardScreenProp = {
  navigation: StackNavigationProp<any, any>
}
const DashboardScreen: React.FC<DashboardScreenProp> = ({ navigation }) => {
 
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Dashboard</Text>
          </View>           
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 15,
      fontWeight: '700',
    },
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export default DashboardScreen;
