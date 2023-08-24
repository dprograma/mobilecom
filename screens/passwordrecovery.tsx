import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type PasswordRecoveryScreenStackParamList = {
  VerifyPasswordCode: undefined;
};

type PasswordRecoveryScreenNavigationProp = StackNavigationProp<
  PasswordRecoveryScreenStackParamList,
  'VerifyPasswordCode'
>;

type PasswordRecoveryScreenRouteProp = RouteProp<
  PasswordRecoveryScreenStackParamList,
  'VerifyPasswordCode'
>;

type Props = {
  navigation: PasswordRecoveryScreenNavigationProp;
  route: PasswordRecoveryScreenRouteProp;
};

const PasswordRecoveryScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.welcometop}>
          <Text style={styles.welcometitle}>Password Recovery</Text>
          <Text style={styles.welcometextln1}>Input your email to change your password</Text>
        </View>

        <View>
          <Input
            placeholder="youremailaddress@mail.com"
            leftIcon={<Icon name="mail-outline" size={15} />}
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={{ fontSize: 14 }}
          />
        </View>

        <Button
          title="Ok"
          ViewComponent={LinearGradient}
          containerStyle={styles.signInButton}
          linearGradientProps={{
            colors: ['#FF0000', '#FFAC07'],
            start: [0, 1],
            end: [1, 1],
          }}
          titleStyle={styles.signInButtonText}
          onPress={() => navigation.navigate('VerifyPasswordCode')}
        />
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
      bottom: -30,
      left: 150,
      width: 140,
      height: 140,
      alignSelf: 'flex-end',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    buttonGroupContainer: {
      borderColor: 'transparent',
      width: Dimensions.get('window').width * .5,
      height: 40,
      marginTop: 2,
      marginLeft: 0,
      marginBottom: 10,
    },
    selectedButton: {
      borderBottomColor: '#FF0000',
      borderBottomWidth: 3,
      width: 80,
      backgroundColor: 'transparent',
    },
    phoneInputContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    countryPicker: {
      flex: 1,
      borderRadius: 10,
      width: 30,
    },
    countrypkr: {
      borderWidth: 1, 
      borderColor: 'gray',
      height: 40,
      width: 70,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
    },
    phoneInput: {
      flex: 2,
      height: 40,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 10,
      width: 120,
      marginLeft: 5,
      borderColor: 'gray',
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
    signInButtonText: {
      color: '#fff',
      fontSize: 15,
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
      marginRight: 50,
    },
    orText: {
      width: 30,
      textAlign: 'center',
    },
    socialContainer: {
      marginTop: -10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    forgotPass: {
      alignSelf: 'flex-start',
      color: '#666',
    },
    signUpLink: {
      marginTop: 10,
      textAlign: 'center',
      color: '#999',
    },
    welcometitle:{
        fontSize: 25,
        fontWeight: '700',
    },
    welcometop:{
      top: 70,
      marginBottom: 120,
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
      width: Dimensions.get('window').width * .5,
      alignSelf: 'center',
      borderRadius: 10,
      marginTop: 10,
    },
    skipToDashboardText: {
      color: 'red',
      fontWeight: '100',
    },
    welcometextln1: {
        color: 'gray',
        fontSize: 15,
    },
  });

export default PasswordRecoveryScreen;
