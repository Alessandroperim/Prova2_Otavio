import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const GameCard = ({ image, name, description, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.cardButton} onPress={onPress}>
        <Text style={styles.cardButtonText}>Trocar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: 300,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardDetails: {
    marginLeft: 12,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    color: 'gray',
  },
  cardButton: {
    backgroundColor: 'green',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  cardButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GameCard;
