import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { symbolName } from 'typescript';

type SelectVerificationCenterScreenProp = {
    navigation: StackNavigationProp<any>;
  };
  
  const SelectVerificationCenterScreen: React.FC<SelectVerificationCenterScreenProp> = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView  contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

            <View style={styles.noticeContainer}>
              <View style={styles.noticeButton}>
              <Text style={styles.text}>Select a center 
                near you to get verified.</Text>
              </View>             
            </View>

            <Image source={require('../assets/mascot.png')}  style={styles.mascot}/>

            

        </View>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    largeImage: {
        width: '100%',
        height: Dimensions.get('window').height * 0.35,
    },
    overlayTextContainer: {
        position: 'absolute',
        bottom: Dimensions.get('window').width * 1.2,
        left: 10,
    },
    overlayTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
    },
    overlaySubtitle: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
    },
    eSimText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    gradientButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 15,

    },
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        flex: 1,
        marginLeft: 20,
    },
    simContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    simText: {
        fontSize: 18,
        flex: 1,
        marginLeft: 10,
        color: '#fff',
    },
    getstarted:{
        flexDirection: 'row',
    },
    rocket:{
        marginLeft: 15,
    },
    noticeContainer: {
      marginTop:105,
      marginBottom: -30,
      height: 90,
      backgroundColor: 'transparent',
      paddingHorizontal: 15,
    },
    noticeButton: {
      height: '100%',
      backgroundColor: '#FFECD0',
      borderWidth: 1,
      borderColor: '#FF6B03',
      borderRadius: 10,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mascot: {
      width: 90,
      height: 90,
      left: 200,
      bottom: 115,
    },
    text: {
      fontSize: 16,
      fontWeight: '700',
    },
});

export default SelectVerificationCenterScreen;
