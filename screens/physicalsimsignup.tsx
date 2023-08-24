import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { symbolName } from 'typescript';

type PhysicalsimsignupScreenProp = {
    navigation: StackNavigationProp<any>;
  };
  
  const PhysicalsimsignupScreen: React.FC<PhysicalsimsignupScreenProp> = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView  contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>


            {/* Large Image */}
            <Image source={require('../assets/esim.png')} style={styles.largeImage} />

            {/* Overlay Text on Image */}
            <View style={styles.overlayTextContainer}>
                <View style={styles.getstarted}><Text style={styles.overlayTitle}>Get Started</Text><Image style={styles.rocket} source={require('../assets/rocket.png')} /></View>
                <Text style={styles.overlaySubtitle}>How would you like to sign up?</Text>
            </View>

            <View style={styles.noticeContainer}>
              <View style={styles.noticeButton}>
              <Text style={styles.text}>Sorry,</Text>
              <Text style={styles.text}>your device does not support eSim. 
                  Don’t worry, we still got you.</Text>
              </View>             
            </View>

            <Image source={require('../assets/mascot.png')}  style={styles.mascot}/>

            {/* Purchase SIM card View */}
            <TouchableOpacity style={styles.simContainer}>
            <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#1860A3', '#5BABF6']} 
                    style={styles.gradient}>
                <Image source={require('../assets/sim.png')} />
                <Text style={styles.simText}>Purchase SIM card             <Text style={{fontSize: 11}}>Explore other services with your current sim</Text></Text>
                <Icon name="chevron-right" size={18} color="white" />
                </LinearGradient>
            </TouchableOpacity>

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
      marginTop: 55,
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
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
    mascot: {
      width: 90,
      height: 90,
      left: 200,
      bottom: 115,
    },
    text: {
      fontSize: 14,
      fontWeight: '700',
    },
});

export default PhysicalsimsignupScreen;
