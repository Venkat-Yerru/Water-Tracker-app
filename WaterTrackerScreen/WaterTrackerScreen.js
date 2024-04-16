import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons icon set
import styles from '../styles/styles'; // Use this if the styles file is directly inside the styles folder
import SettingsScreen from '../SettingsScreen/SettingsScreen';

const WaterTrackerScreen = ({ goal }) => {
  const [waterCount, setWaterCount] = useState(0);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);
  const [editedNote, setEditedNote] = useState('');

  const incrementWaterCount = () => {
    setWaterCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount >= goal) {
        Alert.alert('Goal Reached', 'You have already reached your daily water intake goal.', [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]);
      }
      return newCount;
    });
  };

  const resetWaterCount = () => {
    setWaterCount(0);
    setNotes([]);
    setNewNote('');
  };

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes(prevNotes => [...prevNotes, newNote]);
      setNewNote('');
    }
  };

  const deleteNote = index => {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
  };

  const startEditingNote = index => {
    setEditingNoteIndex(index);
    setEditedNote(notes[index]);
  };

  const finishEditingNote = () => {
    const updatedNotes = [...notes];
    updatedNotes[editingNoteIndex] = editedNote;
    setNotes(updatedNotes);
    setEditingNoteIndex(null);
    setEditedNote('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Water Tracker</Text>
      <View style={styles.waterCounterContainer}>
        <MaterialCommunityIcons name="cup" size={24} color="black" style={styles.icon} />
        <Text style={styles.waterCount}>Cups of Water: {waterCount}</Text>
        <TouchableOpacity style={styles.incrementButton} onPress={incrementWaterCount}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetWaterCount}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>
          <MaterialCommunityIcons name="note-text-outline" size={24} color="black" style={styles.icon} />
          {' '}Notes
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.notesContainer} showsVerticalScrollIndicator={true}>
        {notes.map((note, index) => (
          <View key={index} style={styles.noteItem}>
            {editingNoteIndex === index ? (
              <>
                <TextInput
                  style={styles.noteEditInput}
                  value={editedNote}
                  onChangeText={text => setEditedNote(text)}
                />
                <TouchableOpacity
                  style={[styles.button, styles.saveButton]} // Apply saveButton style
                  onPress={finishEditingNote}
                >
                  <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text>{note}</Text>
                <View style={styles.noteButtonsContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.editButton]} // Apply editButton style
                    onPress={() => startEditingNote(index)}
                  >
                    <Text style={[styles.buttonText, styles.editButtonText]}>Edit</Text> 
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.deleteButton]} // Apply deleteButton style
                    onPress={() => deleteNote(index)}
                  >
                    <Text style={[styles.buttonText, styles.deleteButtonText]}>Delete</Text> 
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.addNoteContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setNewNote(text)}
          value={newNote}
          placeholder="Add a note..."
          onSubmitEditing={addNote}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNote}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WaterTrackerScreen;
