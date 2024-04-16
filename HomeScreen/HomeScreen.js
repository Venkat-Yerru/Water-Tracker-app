import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon set

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToWaterTracker = () => {
    navigation.navigate('WaterTrackerScreen');
  };

  const navigateToSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/picto 1.jpg')} style={styles.image} />
      </View>
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconContainer} onPress={navigateToWaterTracker}>
          <Icon name="tint" size={60} color="#007bff" />
          <Text style={styles.iconText}>Water Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={navigateToSettings}>
          <Icon name="gear" size={60} color="#007bff" />
          <Text style={styles.iconText}>Goal Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Add background color
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#ffffff', // Add background color to icon container
    borderRadius: 10, // Add border radius for rounded corners
    padding: 20, // Add padding for spacing
  },
  iconText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
