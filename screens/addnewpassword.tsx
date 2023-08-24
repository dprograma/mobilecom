import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';

type NewPasswordScreenProps = {
  navigation: any; // Define the type as per your navigation structure
};

const NewPasswordScreen: React.FC<NewPasswordScreenProps> = ({ navigation }) => {
  const [password, setPassword] = useState<string>('');
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleGoBack = () => {
    setShowExitModal(true); // Show exit confirmation modal
  };

  const handleConfirm = () => {
    setShowSuccessModal(true); // Show success modal
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.welcometop}>
          <Text style={styles.welcometitle}>New Password</Text>
          <Text style={styles.welcometextln1}>You can now create a new password</Text>
        </View>

        <View>
          <Input
            placeholder="New password"
            leftIcon={<Icon name="key-outline" />}
            rightIcon={
              <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                <Icon name={hidePass ? 'eye-off-outline' : 'eye-outline'} size={15} color="grey" />
              </TouchableOpacity>
            }
            secureTextEntry={hidePass}
            onChangeText={(value) => setPassword(value)}
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={{ fontSize: 14 }}
          />

          <Input
            placeholder="Confirm password"
            leftIcon={<Icon name="key-outline" />}
            rightIcon={
              <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                <Icon name={hidePass ? 'eye-off-outline' : 'eye-outline'} size={15} color="grey" />
              </TouchableOpacity>
            }
            secureTextEntry={hidePass}
            onChangeText={(value) => setPassword(value)}
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={{ fontSize: 14 }}
          />
        </View>

        {/* Modal for success confirmation */}
        <Modal isVisible={showSuccessModal}>
          <View style={styles.modalContent}>
            <Image source={require('../assets/success.png')} />
            <Text style={styles.modaltext}>You have successfully changed your password</Text>
            <TouchableOpacity onPress={() => setShowSuccessModal(false)}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF0000', '#FFAC07']} style={styles.gradient1}>
                <Text style={styles.buttonText}>Ok</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Modal>

        <Button
          title="Confirm"
          ViewComponent={LinearGradient}
          containerStyle={styles.signInButton}
          linearGradientProps={{
            colors: ['#FF0000', '#FFAC07'],
            start: [0, 1],
            end: [1, 1],
          }}
          titleStyle={styles.signInButtonText}
          onPress={handleConfirm}
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
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
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
      marginBottom: 100,
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
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      gradient1: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 85,
          paddingVertical: 10,
          borderRadius: 10,
          marginRight: 2,
          marginTop: 20,
      },
      modaltext:{
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
      }
  });

export default NewPasswordScreen;
