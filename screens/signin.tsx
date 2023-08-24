import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Input,
  Button,
  SocialIcon,
  ButtonGroup,
} from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

type SignInScreenProps = {
  navigation: StackNavigationProp<any>;
};

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
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
      <Text style={styles.welcometitle}>Hi There</Text>
      <Text>Welcome back,</Text>
      <Text>Sign into your account.</Text>
      <View>
        <Image source={require('../assets/mascot.jpg')} style={styles.mascot} /> 
      </View>
      </View>

        <ButtonGroup
                onPress={updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.buttonGroupContainer}
                selectedButtonStyle={styles.selectedButton}
                selectedTextStyle={{ textAlign: 'left', color: '#333', fontWeight: '700'}} // Adjusting the selected button text alignment
                buttonStyle={{ borderBottomWidth: 3, borderBottomColor: '#ddd' }} // Aligning text to the left
                innerBorderStyle={{ width: 0 }}
            />

      {selectedIndex === 0 && (
        <View>
          <View style={styles.phoneInputContainer}>
            <TouchableOpacity style={styles.countrypkr}>
            <CountryPicker
              onSelect={(country) => setSelectedCountry(country)}
              withFilter
              withFlag
              countryCode={selectedCountry?.cca2 || 'NG'}
            />
            <Icon name='chevron-down' />
            </TouchableOpacity>
            <TextInput 
              placeholder="Phone number" 
              style={styles.phoneInput} 
              onChangeText={(value) => setPhone(value)}
            />
          </View>
          <Input
            placeholder="Password"
            leftIcon={<Icon  name="key-outline" />}
            rightIcon={
              <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                <Icon
                  name={hidePass ? 'eye-off-outline' : 'eye-outline'}
                  size={15}
                  color="grey"
                />
              </TouchableOpacity>
            }
            secureTextEntry={hidePass}
            onChangeText={(value) => setPassword(value)}
            containerStyle={styles.passwordInput}
            inputContainerStyle={{ borderBottomWidth: 0}} 
            inputStyle={{ fontSize: 15 }}
          />
        </View>
      )}

      {selectedIndex === 1 && (
        <View>
          <Input
            placeholder="Email"
            leftIcon={<Icon name="mail-outline" />}
            onChangeText={(value) => setEmail(value)}
            containerStyle={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }} 
            inputStyle={{ fontSize: 15 }}
          />
          <Input
            placeholder="Password"
            leftIcon={<Icon name="key-outline" />}
            rightIcon={
              <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                <Icon
                  name={hidePass ? 'eye-off-outline' : 'eye-outline'}
                  size={15}
                  color="grey"
                />
              </TouchableOpacity>
            }
            secureTextEntry={hidePass}
            onChangeText={(value) => setPassword(value)}
            containerStyle={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0, borderTopWidth: 0}} 
            inputStyle={{ fontSize: 15 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      )}

      <Button title="Sign In" ViewComponent={LinearGradient}
        containerStyle={styles.signInButton}
        linearGradientProps={{
          colors: ['#FF0000', '#FFAC07'],
          start: [0, 1],
          end: [1, 1],
        }}
        titleStyle={styles.signInButtonText} onPress={() => navigation.navigate('VerifyLoginCode')}/>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line2} />
      </View>

      <View style={styles.socialContainer}>
        <Image style={styles.social} source={require('../assets/google2.png')}/>
        <Image style={styles.social} source={require('../assets/twitter2.png')}/>
        <Image style={styles.social} source={require('../assets/facebook2.png')}/>    
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpLink}>
          Don't have an account yet? <Text style={styles.signup}>Sign up</Text>
        </Text>
      </TouchableOpacity>

      {selectedIndex === 1 && (
         <Button onPress={() => navigation.navigate('Welcome')} title="Skip to dashboard" 
         buttonStyle={styles.skiptodashboard}
         titleStyle={styles.skipToDashboardText} />
      )}
     
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
        fontSize: 30,
        fontWeight: '700',
    },
    welcometop:{
      top: 50,
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
      width: Dimensions.get('window').width * .5,
      alignSelf: 'center',
      borderRadius: 10,
      marginTop: 10,
    },
    skipToDashboardText: {
      color: 'red',
      fontWeight: '100',
    }
  });

export default SignInScreen;
