import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

interface Slide {
  key: string;
  title: string;
  text: string;
  image: any;
}

const slides: Slide[] = [
  {
    key: 'one',
    title: 'Unleash the Power of 5G!',
    text: 'Welcome to our lightning-fast 5G network app! Experience the future of connectivity',
    image: require('../assets/1.png'),
  },
  {
    key: 'two',
    title: 'Speed and Performance',
    text: 'Thank you for joining our 5G network app! Say goodbye to buffering and lagging.',
    image: require('../assets/2.png'),
  },
  {
    key: 'three',
    title: 'Power your Business ',
    text: 'Welcome to our lightning-fast 5G network app! ',
    image: require('../assets/3.png'),
  },
];

interface WelcomeProps {
  navigation: any;
}

class Welcome extends Component<WelcomeProps> {
  private _slider: AppIntroSlider | null = null;

  constructor(props: WelcomeProps) {
    super(props);
  }

  renderItem = ({ item }: { item: Slide }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Image source={require('../assets/mafab.png')} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          <Button
            title="Get Started"
            onPress={() => this.props.navigation.navigate('Signin')}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#FF0000', '#FFAC07'],
              start: [0, 1],
              end: [1, 1],
            }}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
          />
          {item.key !== 'three' ? (
            <TouchableOpacity onPress={() => this._slider?.goToSlide(this._slider.state.activeIndex + 1, true)}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Text style={styles.noskip}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  renderPagination = (activeIndex: number) => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationDot,
              i === activeIndex
                ? styles.activeDot
                : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <AppIntroSlider
            renderItem={this.renderItem}
            data={slides}
            renderPagination={this.renderPagination}
            ref={(ref) => (this._slider = ref)}
            showNextButton={false}
            showDoneButton={false}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
    marginBottom: 0,
  },
  logo: {
    position: 'absolute',
    left: 47,
    top: 49,
    width: 75,
    height: 43,
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 46,
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  buttonStyle: {
    width: 250,
    height: 45,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonTitleStyle: {
    fontSize: 18,
  },
  skip: {
    fontSize: 18,
    color: 'red',
    textDecorationLine: 'none',
    marginBottom: 0,
  },
  noskip: {
    fontSize: 18,
    color: 'transparent',
    textDecorationLine: 'none',
    marginBottom: 0,
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 220,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: -80,
  },
  paginationDot: {
    width: 15,
    height: 5,
    borderRadius: 3,
    marginHorizontal: 2,
    backgroundColor: '#A9A9A9',
  },
  activeDot: {
    backgroundColor: 'red',
    width: 25,
    height: 5,
    borderRadius: 3,
    marginLeft: 10,
  },
  inactiveDot: {
    backgroundColor: '#ededed',
    width: 15,
    height: 5,
    borderRadius: 3,
    marginLeft: 10,
  },
});

export default Welcome;
