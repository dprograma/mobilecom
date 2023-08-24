import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import SvgUri from 'react-native-svg-uri';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const { width, height } = Dimensions.get('window');

type Slide = {
  title: string;
  validity: string;
  expires: string;
};

const HomeScreen: React.FC = () => <View />;
const AccountScreen: React.FC = () => <View />;
const SettingsScreen: React.FC = () => <View />;
const MoreScreen: React.FC = () => <View />;

const Tab = createBottomTabNavigator();

const UserDashboardScreen: React.FC = () => {

    const slides: Slide[] = [
        { title: '20GB Data', validity: '30 Days', expires: '25th March' },
        { title: '10GB Data', validity: '15 Days', expires: '15th March' },
        { title: '5GB Data', validity: '7 Days', expires: '7th March' },
      ];

    const content = [
      { image: require('../assets/Vector1.svg'), title: 'Buy Plan', description: 'Purchase personal and business data plans.' },
      { image: require('../assets/Vector2.svg'), title: 'My Plans', description: 'See all your active plans in one place' },
      { image: require('../assets/Vector3.svg'), title: 'Pay Bills', description: 'Explore our wide range of payment services' },
    ];
    
    
      // Carousel item rendering
      const _renderItem = ({ item }: { item: Slide }) => {
        return (
          <View style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: 150,
            padding: 20,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 15,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/mafab.png')} style={{ width: 25, height: 25, }} /><Text style={{fontSize: 14, fontWeight: '500', color: '#f00'}}>Basic</Text>
                </View>
               
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                <Text style={{color: 'gray', fontSize: 12}}>Monthly Plan</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginRight: 5 }}>
                  <Text style={{fontSize: 11}}>Validity</Text>
                  <Text style={{color: 'gray', fontSize: 11}}>{item.validity}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginLeft: 5 }}>
                  <Text style={{fontSize: 11}}>Expires</Text>
                  <Text style={{color: 'gray', fontSize: 11}}>{item.expires}</Text>
                </View>
                </View>
                
              </View>
              <View>
                <AnimatedCircularProgress
                  size={90}
                  width={10}
                  fill={65}
                  tintColor="#17A76A"
                  backgroundColor="rgba(0, 193, 124, 0.08)"
                  lineCap="round"
                  rotation={15}
                >
                  {() => (
                    <View style={{flexDirection:'column', alignItems: 'center'}}>
                    <Text style={{fontWeight: '700'}}>
                    5GB
                  </Text>
                  <Text style={{color: 'rgba(33, 33, 33, 0.52)', fontSize: 9}}>Used today</Text></View>
                  )}
                </AnimatedCircularProgress>
                <Text style={{ color: '#2183DF', alignSelf: 'center', fontSize: 12, marginTop: 5 }}>Manage</Text>
              </View>
            </View>
          </View>
        );
      };
    
      
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView  contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#F00', '#FFAC07']}
        style={styles.backgroundBanner}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 0 }}>
        
        <View style={styles.firstRow}>
          <Image
            source={require('../assets/profile.png')} 
            style={styles.profileImage}
          />
          <View style={styles.verifiedPill}><Text style={styles.buttonTextStyle}>Verified</Text></View>
          <View style={styles.phoneNumberBox}>
            <Text style={styles.whiteText}>081-8487-3849 <Ionicons name="chevron-down-outline" color="white" size={20}/></Text>
            <Text style={styles.whiteText}>Add number</Text>
          </View>
          <View style={styles.notificationIcon}>
            <Icon name="bell-o" size={20} color="white" />
            <Text style={styles.notificationNumber}>2</Text>
          </View>
        </View>

        <View style={styles.secondRow}>
        <Text style={[styles.whiteText, styles.notbold]}>Hi <Text style={styles.bolder}>Segun</Text></Text>
        <View style={styles.shopIconContainer}>
            <Icon name="shopping-bag" size={20} color="white" />
            <Text style={styles.whiteText}>Shop</Text>
        </View>
        </View>

        <View style={styles.thirdRow}>
        <View style={styles.walletContainer}>
            <View style={styles.walletIconContainer}>
            <Ionicons name="wallet-outline" size={30} color="#EA7810" />
            </View>
            <View style={styles.balanceContainer}>
            <Text style={styles.walletbalancetext}>Wallet Balance</Text>
            <Text style={styles.bold}>N2,000</Text>
            </View>
        </View>
        <LinearGradient
            colors={['#F00', '#FFAC07']}
            style={styles.topUpContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <Ionicons name="add-outline" size={20} color="white" />
            <Text style={styles.whiteText}>Top-Up</Text>
        </LinearGradient>
        </View>

        <View style={styles.fourthRow}>
        <Text style={[styles.whiteText, styles.myplanstext]}>My Data Plans</Text>
        <Text style={[styles.whiteText, styles.myplanstext]}>See All</Text>
        </View>
        <View>
      <Carousel
        data={slides}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width - 60}
        layout={'default'}
      />
      </View>
      </LinearGradient>
      
      <View style={styles.itemsContainer}>
      {content.map((item, index) => (
        <View style={styles.rectangleContainer} key={index}>
          <View style={styles.circleImageContainer}>
            <SvgUri
              width="30"
              height="30"
              source={item.image}
            />
          </View>
          <Text style={styles.boldText}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </View>

    <View style={styles.imageBackgroundContainer}>
      <ImageBackground
        source={require('../assets/5G.jpg')}
        style={styles.banner}
        resizeMode="cover"
      >
        <Text style={styles.bannerText}>Ad banner</Text>
      </ImageBackground>
    </View>

      </ScrollView>

      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: string;
          let gradientColors: string[] = [];
          let text: string;

          if (route.name === 'Home') {
            iconName = 'home-outline';
            gradientColors = ['#F00', '#FFAC07'];
            text = 'Home';
          } else if (route.name === 'Account') {
            iconName = 'person-outline';
            gradientColors = ['rgba(234, 120, 16, 0.24)', 'rgba(234, 120, 16, 0.24)'];
            text = 'Account';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
            gradientColors = ['rgba(234, 120, 16, 0.24)', 'rgba(234, 120, 16, 0.24)'];
            text = 'Settings';
          } else if (route.name === 'More') {
            iconName = 'menu-outline';
            gradientColors = ['rgba(234, 120, 16, 0.24)', 'rgba(234, 120, 16, 0.24)'];
            text = 'More';
          }

          return (
            <TouchableOpacity style={styles.tabButton}>
              {/* <LinearGradient colors={gradientColors} style={styles.iconContainer}> */}
                <Ionicons name={iconName} size={25} color={focused ? '#FF0000' : '#999999'} />
              {/* </LinearGradient> */}
              {/* <Text style={styles.tabText}>{text}</Text> */}
            </TouchableOpacity>
          );
        },
        tabBarActiveTintColor: '#F00', // Color for the selected tab label and icon
        tabBarInactiveTintColor: '#999', // Color for the unselected tab label and icon
        tabBarStyle: { backgroundColor: '#fff', bottom: 50}, // Background color of the tab bar
        tabBarLabelStyle: { fontSize: 10 }, // Style object for the tab label
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>

      </SafeAreaView>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    carouselStyle: {
        width: width,
    },
    backgroundBanner: {
      width: width,
      height: height * 0.42,
      padding: 15,
      marginBottom: 130,
    },
    firstRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderColor: 'white',
      borderWidth: 2,
    },
    verifiedPill: {
      backgroundColor: 'white',
      paddingHorizontal: 5,
      borderRadius: 50,
      fontWeight: '500',
      color: '#079160',
    },
    phoneNumberBox: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#E31E18',
      marginLeft: 10,
      padding: 5,
      borderRadius: 5,
    },
    whiteText: {
      color: 'white',
      fontWeight: '300',
    },
    notificationIcon: {
      position: 'relative',
      marginLeft: 10,
    },
    notificationNumber: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: 'red',
      borderRadius: 10,
      color: 'white',
      fontWeight: '400',
      paddingHorizontal: 2,
      fontSize: 8,
    },
    secondRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
      },
      notbold: {
        fontSize: 35,
      },
      bold: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      myplanstext: {
        fontWeight: 'bold',
        fontSize: 14,
      },
      walletbalancetext: {
        fontSize: 11,
      },
      bolder: {
        fontWeight: 'bold',
        fontSize: 35,
      },
      shopIconContainer: {
        alignItems: 'center',
      },
      thirdRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
      },
      walletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      walletIconContainer: {
        backgroundColor: 'rgba(234, 120, 16, 0.08)',
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
      },
      topUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 9,
      },
      fourthRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
      },
      buttonTextStyle: {
        fontWeight: '400',
        color: '#079160',
        textAlign: 'center',
        paddingVertical: 1,
        paddingHorizontal: 2,
        fontSize: 12,
    },
    balanceContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    slideContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        padding: 10,
      },
      firstColumn: {
        flex: 1,
      },
      slideImage: {
        width: 50,
        height: 50,
      },
      boldLargeText: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      validityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      secondColumn: {
        flex: 1,
        alignItems: 'center',
      },
      progressCenterText: {
        fontSize: 18,
      },
      progressSubText: {
        fontSize: 12,
      },
      manageText: {
        color: 'blue',
      },
      itemsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
      },
      rectangleContainer: {
        width: Dimensions.get('window').width / 3 - 17,
        backgroundColor: 'rgba(234, 120, 16, 0.04)',
        borderRadius: 10,
        paddingHorizontal: 7,
        paddingVertical: 3,
      },
      circleImageContainer: {
        backgroundColor: 'rgba(234, 120, 16, 0.08)',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5,
      },
      boldText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
      },
      description: {
        textAlign: 'center',
        flexWrap: 'wrap',
        fontSize: 7,
        color: '#999'
      },
      imageBackgroundContainer: {
        alignItems: 'center',
        marginBottom: 50,
      },
      banner: {
        width: width * .9,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
      },
      bannerText: {
        color: 'white',
        fontWeight: 'bold',
      },
      tabButton: {
        borderRadius: 5,
        // width: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      tabButtonText: {
        color: 'white',
      },
      gradient: {
        flex: 1,
      },
      adBannerContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    margin: 15,
  },
  adBanner: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adBannerText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  iconContainer: {
  
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  });
  

  export default UserDashboardScreen;
  