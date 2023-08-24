import React from 'react';
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/welcome';
import Signin from './screens/signin';
import Signup from './screens/signup';
import Plans from './screens/plans';
import Esimsignup from './screens/esimsignup';
import AccountVerification from './screens/accountverification';
import NinRegistraion from './screens/ninregistration';
import PasswordRecovery from './screens/passwordrecovery';
import VerifyPasswordCode from './screens/verifypasswordcode';
import NewPassword from './screens/addnewpassword';
import CustomHeader from './screens/customerheader';
import VerifyLoginCode from './screens/verifylogincode';
import Dashboard from './screens/dashboard';
import UserDashboard from './screens/userdashboard';
import WelcomeBack from './screens/welcomeback';
import Physicalsimsignup from './screens/physicalsimsignup';
import SelectVerificationCenter from './screens/selectverificationcenter';

const Stack = createNativeStackNavigator();

const App: React.FC = (props) => {

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SelectVerificationCenter'>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={Signin} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={35} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100' }} />
                            </TouchableOpacity>
                        ) })} />
            <Stack.Screen name="Signup" component={Signup} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" size={35} color="white" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: '#333', fontSize: 30, fontWeight: '100' }} />
                            </TouchableOpacity>
                        ) })} />
            <Stack.Screen name="Plans" component={Plans} options={({navigation}) => ({ 
                headerTitle: 'eSIM Sign up',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
             <Stack.Screen name="Esimsignup" component={Esimsignup} options={({navigation}) => ({ 
                headerTitle: 'eSIM Sign up',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
            <Stack.Screen name="AccountVerification" component={AccountVerification} options={({navigation}) => ({ 
                headerTitle: 'eSIM Sign up',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
            <Stack.Screen name="NinRegistraion" component={NinRegistraion} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
             <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
            <Stack.Screen name="VerifyPasswordCode" component={VerifyPasswordCode} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
             <Stack.Screen name="NewPassword" component={NewPassword} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                    <CustomHeader navigation={navigation} />
                        ) })} />
            <Stack.Screen name="VerifyLoginCode" component={VerifyLoginCode} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
             <Stack.Screen name="UserDashboard" component={UserDashboard} options={{ headerShown: false }} />
             <Stack.Screen name="WelcomeBack" component={WelcomeBack} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: 'rgba(234, 120, 16, 0.24)', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
            <Stack.Screen name="Physicalsimsignup" component={Physicalsimsignup} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="white" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: '#333', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
             <Stack.Screen name="SelectVerificationCenter" component={SelectVerificationCenter} options={({navigation}) => ({ 
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25} color="white" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: '#000', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
                            </TouchableOpacity>
                        ) })} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App