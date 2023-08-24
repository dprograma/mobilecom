import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Define the type for the navigation prop
interface PlansScreenProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

const PlansScreen: React.FC<PlansScreenProps> = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topTitleContainer}>
          <Text style={styles.textTitle}>Available Plans</Text>
          <Text style={styles.text}>Select preferred plan to continue</Text>
        </View>
        <View style={styles.selectPlanContainer}>
          <TouchableOpacity style={styles.plantabs} onPress={() => navigation.navigate('Esimsignup')}>
            <Text>Plan 1 content to be provided</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.plantabs}>
            <Text>Plan 2 content to be provided</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.plantabs}>
            <Text>Plan 3 content to be provided</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.plantabs}>
            <Text>Plan 4 content to be provided</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topTitleContainer: {
    flex: 1,
    padding: 25,
    marginTop: 50,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: '800',
  },
  text: {
    fontSize: 14,
    color: '#888',
  },
  selectPlanContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    bottom: Dimensions.get('window').height - 400,
    marginTop: 50,
  },
  plantabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 10,
    backgroundColor: '#D9D9D9',
    width: Dimensions.get('window').width * 0.85,
    height: 70,
    // marginTop: 120,
    borderRadius: 10,
  },
});

export default PlansScreen;
