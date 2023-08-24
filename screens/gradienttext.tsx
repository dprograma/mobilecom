import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from 'react-native-masked-view';

const GradientText = (props) => {
  return (
    <MaskedView
      style={{ flexDirection: 'row', height: '100%', width: '100%' }}
      maskElement={
        <View style={styles.maskedContainer}>
          <Text style={styles.maskedText}>
            {props.text}
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={['#F00', '#FFAC07']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  maskedText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black', // This color determines what portion of the gradient is "masked" out
  },
  gradient: {
    flex: 1,
  },
});

export default GradientText;
