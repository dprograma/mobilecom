import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

type SignUpScreenProps = {
    navigation: StackNavigationProp<any>;
  };
  
  const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {

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

            {/* eSIM Support Text */}
            <Text style={styles.eSimText}>Your phone supports eSIM</Text>

            {/* Purchase eSIM Button */}
            <TouchableOpacity onPress={() => navigation.navigate('Plans')} style={styles.gradientButton}>
                <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#FF0000', '#FFAC07']} 
                    style={styles.gradient}>
                    <Image source={require('../assets/esim-small.png')} />
                    <Text style={styles.buttonText}>Purchase eSIM</Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* FREE Trial Button */}
            <TouchableOpacity style={styles.gradientButton}>
                <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#FF0000', '#FFAC07']} 
                    style={styles.gradient}>
                    <Image source={require('../assets/esim-small.png')} />
                    <Text style={styles.buttonText}><Text style={{fontSize: 13}}>Checkout our             </Text>FREE trial offer</Text>
                    <View style={styles.freePill}>
                        <Text style={styles.freeText}>Free</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            {/* Or Legend */}
            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Or</Text>
                <View style={styles.line2} />
            </View>

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
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
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
    freePill: {
        backgroundColor: 'green',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    freeText: {
        color: 'white',
        paddingHorizontal: 5,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginLeft: 50,
    },
    line2: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginRight: 50
    },
    orText: {
        width: 30,
        textAlign: 'center',
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
    }
});

export default SignUpScreen;
