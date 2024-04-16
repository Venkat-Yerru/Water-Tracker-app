import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SettingsScreen = ({ setGoal }) => {
  const image = require('../assets/picto6.jpg');
  const [goal, setGoalText] = useState(''); // State to store the goal input value

  const saveGoal = () => {
    if (!goal) {
      alert('Please enter a goal before saving.');
      return;
    }
    setGoal(goal);
    alert(`Saved goal: ${goal}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={image}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.header}>Set Daily Water Intake Goal</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setGoalText(text)} // Update the goal input value
        value={goal} // Bind the input value to the state
        keyboardType="numeric"
        placeholder="Enter goal in cups"
      />
      <TouchableOpacity style={styles.button} onPress={saveGoal}>
        <Text style={styles.buttonText}>Save Goal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default SettingsScreen;
