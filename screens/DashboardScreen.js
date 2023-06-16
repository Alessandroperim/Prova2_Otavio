import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const handleCardPress = (cardName) => {
    console.log(`Botão de troca pressionado para o item: ${cardName}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContainer} onPress={() => handleCardPress('Espada')}>
        <Image
          source={{ uri: 'https://reinodeshirom.weebly.com/uploads/1/5/3/5/15354286/102625659.jpg' }}
          style={styles.cardImage}
        />
        <View style={styles.cardDetails}>
          <Text style={styles.cardName}>Espada dos Deuses</Text>
          <Text style={styles.cardDescription}>Poder de ataque: 210, Defesa: 20</Text>
        </View>
        <TouchableOpacity style={styles.cardButton} onPress={() => handleCardPress('Espada')}>
          <Text style={styles.cardButtonText}>Trocar</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardContainer} onPress={() => handleCardPress('Escudo')}>
        <Image
          source={{ uri: 'http://2.bp.blogspot.com/-bpmqxktsrFw/Uy3ETRC4MgI/AAAAAAAAAm0/zvaymYQIMto/s1600/Iron_Shield_SK+(1).png' }}
          style={styles.cardImage}
        />
        <View style={styles.cardDetails}>
          <Text style={styles.cardName}>Escudo Viking</Text>
          <Text style={styles.cardDescription}>Poder de ataque: 10, Defesa: 85</Text>
        </View>
        <TouchableOpacity style={styles.cardButton} onPress={() => handleCardPress('Escudo')}>
          <Text style={styles.cardButtonText}>Trocar</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardContainer} onPress={() => handleCardPress('Cajado')}>
        <Image
          source={{ uri: 'https://reinodeurfic.weebly.com/uploads/1/0/9/4/10944662/6410283.jpg' }}
          style={styles.cardImage}
        />
        <View style={styles.cardDetails}>
          <Text style={styles.cardName}>Cajado Real</Text>
          <Text style={styles.cardDescription}>Poder de ataque: 100, Defesa: 10</Text>
        </View>
        <TouchableOpacity style={styles.cardButton} onPress={() => handleCardPress('Cajado')}>
          <Text style={styles.cardButtonText}>Trocar</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#121212',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FF9900',
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#222222',
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF9900',
  },
  cardDetails: {
    flex: 1,
    marginRight: 16,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF9900',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  cardButton: {
    backgroundColor: '#FF9900',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  cardButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DashboardScreen;
