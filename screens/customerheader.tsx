import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';

interface CustomHeaderProps {
  navigation: {
    goBack: () => void;
  };
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
  const [showExitModal, setShowExitModal] = useState(false);

  const handleGoBack = () => {
    setShowExitModal(true);
  };

  return (
    <>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="arrow-back" size={25} color="red" style={{ marginHorizontal: 10, borderRadius: 15, backgroundColor: '#f0f0f0', fontSize: 30, fontWeight: '100', marginRight: Dimensions.get('window').width * 0.4 }} />
      </TouchableOpacity>

      {/* Modal for exit confirmation */}
      <Modal isVisible={showExitModal}>
        <View style={styles.modalContent}>
          <Text>Cancel password recovery?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={() => { setShowExitModal(false); navigation.goBack(); }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#FF0000', '#FFAC07']}
                style={styles.gradient}>
                <Text style={styles.buttonText}>Yes</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signinButton} onPress={() => setShowExitModal(false)}>
              <Text style={styles.signInButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '60%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 2,
  },
  signInButtonText: {
    color: '#333',
    fontSize: 15,
  },
  signinButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginLeft: 2,
  },
});

export default CustomHeader;
