import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

const fillCodeWidth = Dimensions.get('window').width; 

type VerifyPasswordCodeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const VerifyPasswordCodeScreen: React.FC<VerifyPasswordCodeScreenProps> = ({ navigation }) => {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
      <View style={styles.welcometop}>
      <Text style={styles.welcometitle}>Verify Code</Text>
      <Text style={styles.welcometextln1}>A 5 digit code has been sent to your </Text>
      <Text style={styles.welcometextln2}>email address</Text>
    </View>
        <View style={styles.fillCodeContainer}>
        <Input
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0}} 
            inputStyle={{ fontSize: 14 }}
          />
          <Input
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0}} 
            inputStyle={{ fontSize: 14 }}
          />
          <Input
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0}} 
            inputStyle={{ fontSize: 14 }}
          />
          <Input
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0}} 
            inputStyle={{ fontSize: 14 }}
          />
          <Input
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0}} 
            inputStyle={{ fontSize: 14 }}
          />
        </View>

        <Button title="Confirm" ViewComponent={LinearGradient}
        containerStyle={styles.signInButton}
        linearGradientProps={{
          colors: ['#FF0000', '#FFAC07'],
          start: [0, 1],
          end: [1, 1],
        }}
        titleStyle={styles.signInButtonText} onPress={() => navigation.navigate('NewPassword')} />



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
    fillCodeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 40,
        alignSelf: 'center',
    },
    socialContainer: {
      marginTop: -10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    welcometitle:{
        fontSize: 25,
        fontWeight: '700',
    },
    welcometop:{
      top: 70,
      marginBottom: 100,
    },
    signup:{
      color: 'red',
    },
    welcometextln1: {
        marginTop: 10,
        color: 'gray',
        fontSize: 15,
    },
    welcometextln2: {
        color: 'gray',
        fontSize: 15,
    },
    passwordInput: {
        width: fillCodeWidth / 5,
        height: 40,
        borderWidth: 1,
        borderColor: '#aaa',
        margin: 3,
        borderRadius: 10,
        flex: 1,
    },
    fillCodeResponseContainer: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    didNotReceiveOtpText: {
        fontSize: 14,
        fontWeight: '700',
    },
    resendCountDownText: {
        fontSize: 14,
        color: '#666',
    },
    resendTimeLeftText: {
        fontSize: 14,
        color: '#06f'
    },
    resendFillCodeButton: {
        marginTop: 20,
        borderWidth: 1,
        width: fillCodeWidth / 3,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderColor: '#eee',
        borderRadius: 10,
    },
    resendText: {
        color: '#999',
    },
    signInButton: {
        marginTop: 25,
        borderRadius: 10,
      },
      signInButtonText: {
        color: '#fff',
        fontSize: 15,
      },
  });

export default VerifyPasswordCodeScreen;
