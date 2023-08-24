import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationProp } from '@react-navigation/native';

type NinRegistrationScreenProps = {
  navigation: NavigationProp<any>;
};

const NinRegistrationScreen: React.FC<NinRegistrationScreenProps> = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const buttons = ['Phone', 'Email'];

  const updateIndex = (selectedIndex: number) => {
    setSelectedIndex(selectedIndex);
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
      <View style={styles.welcometop}>
      <Text style={styles.welcometitle}>Well done, Registration Complete</Text>
      <Text style={styles.welcometextln1}>Now let's get you verified in these easy steps</Text>
      <View>
        <Image source={require('../assets/mascot.jpg')} style={styles.mascot} /> 
      </View>
      </View>

        <View style={styles.enterNinContainer}><Text>Enter your NIN</Text><Image style={styles.nimc} source={require('../assets/nimc.png')} /></View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="NIN"
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0}} 
            inputStyle={{ fontSize: 14 }}
          />
        </View>

      <Button title="Submit" ViewComponent={LinearGradient}
        containerStyle={styles.signInButton}
        linearGradientProps={{
          colors: ['#FF0000', '#FFAC07'],
          start: [0, 1],
          end: [1, 1],
        }}
        titleStyle={styles.signInButtonText} />

    <Button title="I don't have NIN" ViewComponent={LinearGradient}
        containerStyle={styles.noNINButton}
        linearGradientProps={{
          colors: ['#000', '#000'],
          start: [0, 1],
          end: [1, 1],
        }}
        titleStyle={styles.signInButtonText} />

        </ScrollView>
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    mascot: {
      position: 'absolute',
      bottom: 50,
      left: 155,
      width: 140,
      height: 140,
      alignSelf: 'flex-end',
    }, 
    passwordInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
    },
    signInButton: {
      marginTop: 10,
      borderRadius: 10,
    },
    noNINButton: {
        marginTop: 30,
        borderRadius: 10,
    },
    signInButtonText: {
      color: '#fff',
      fontSize: 14,
    },

    welcometitle:{
        fontSize: 28,
        fontWeight: '700',
    },
    welcometop:{
      top: 70,
      marginBottom: 60,
    },
    signup:{
      color: 'red',
    },
    social:{
      marginHorizontal: 12,
      width: 40,
      height: 40,
    },
    skiptodashboard: {
      backgroundColor: 'white',
      borderColor: 'red',
      borderWidth: 1,
      alignSelf: 'center',
      borderRadius: 10,
      marginTop: 10,
    },
    skipToDashboardText: {
      color: 'red',
      fontWeight: '100',
    },
    welcometextln1: {
        marginTop: 10,
        fontSize: 15,
        color: '#999',
        fontWeight: '500',
        width: Dimensions.get('window').width * .8,
    },
    inputContainer: {
        marginTop: 12,
    },
    enterNinContainer: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    nimc: {
        width: 35,
        height: 23,
        marginLeft: 15,
    },
  });

export default NinRegistrationScreen;
