import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

const fillCodeWidth = Dimensions.get('window').width;

type AccountVerificationScreenProps = {
  navigation: StackNavigationProp<any, any>; // You can replace 'any' with specific route types if defined
};

const AccountVerificationScreen: React.FC<AccountVerificationScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.welcometop}>
          <Text style={styles.welcometitle}>Account Verification</Text>
          <Text style={styles.welcometextln1}>A 5 digit code has been sent to your </Text>
          <Text style={styles.welcometextln2}>email and phone number.</Text>
        </View>
        <View style={styles.fillCodeContainer}>
          <Input containerStyle={styles.passwordInput} inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ fontSize: 14 }} />
          <Input containerStyle={styles.passwordInput} inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ fontSize: 14 }} />
          <Input containerStyle={styles.passwordInput} inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ fontSize: 14 }} />
          <Input containerStyle={styles.passwordInput} inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ fontSize: 14 }} />
          <Input containerStyle={styles.passwordInput} inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ fontSize: 14 }} />
        </View>
        <View style={styles.fillCodeResponseContainer}>
          <Text style={styles.didNotReceiveOtpText}>Did not receive OTP?</Text>
          <Text style={styles.resendCountDownText}>
            Resend in <Text style={styles.resendTimeLeftText}>0:59</Text>
          </Text>
          <TouchableOpacity style={styles.resendFillCodeButton} onPress={() => navigation.navigate('NinRegistraion')}>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-evenly', // Corrected the typo from 'evenly-spaced' to 'space-evenly'
    alignItems: 'center',
    height: 40,
    alignSelf: 'center',
  },
  socialContainer: {
    marginTop: -10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcometitle: {
    fontSize: 25,
    fontWeight: '700',
  },
  welcometop: {
    top: 70,
    marginBottom: 120,
  },
  signup: {
    color: 'red',
  },
  welcometextln1: {
    marginTop: 10,
    color: 'gray',
    fontSize: 13,
  },
  welcometextln2: {
    color: 'gray',
    fontSize: 13,
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
    color: '#06f',
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
});

export default AccountVerificationScreen;
