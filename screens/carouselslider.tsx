import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth * 0.8;

const MySlider: React.FC = () => (
  <Carousel
    data={[1, 2, 3]}
    renderItem={renderSlideItem}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
    inactiveSlideOpacity={1}
    inactiveSlideScale={1}
    activeSlideAlignment="center"
    loop={true}
    autoplay={false}
    autoplayDelay={3000}
    autoplayInterval={3000}
    removeClippedSubviews={false}
    showsPagination={false}
  />
);

const renderSlideItem: React.FC = () => (
  <View style={styles.slideContainer}>
    <View style={styles.column1}>
      <Image source={require('../assets/mafab.png')} style={styles.image} />
      <Text style={styles.boldText}>20GB Data</Text>
      <Text>Monthly Plan</Text>
      <View style={styles.row2}>
        <View>
          <Text>Validity</Text>
          <Text>30 Days</Text>
        </View>
        <View>
          <Text>Expires</Text>
          <Text>25th March</Text>
        </View>
      </View>
    </View>
    <View style={styles.column2}>
      <AnimatedCircularProgress
        size={100}
        width={10}
        fill={60}
        rotation={0}
        lineCap="round"
        backgroundWidth={5}
        tintColor="#6AF6A2"
        backgroundColor="#17A76A"
      >
        {() => (
          <>
            <Text style={styles.boldText}>5GB</Text>
            <Text>Used today</Text>
          </>
        )}
      </AnimatedCircularProgress>
      <Text style={styles.manageText}>Manage</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  slideContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 15,
  },
  column1: {
    flex: 1,
  },
  column2: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  manageText: {
    color: 'blue',
  },
});

export default MySlider;
