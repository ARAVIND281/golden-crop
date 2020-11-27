import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Leaf4_1 extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.textContainer}>
          <Image
            style={{ height: 50, width: 50, marginTop: 10, marginLeft: 10 }}
            source={require('../image.png')}
          />
          <Text style={styles.text}>GOLDEN CROP</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Text style={styles.home}>🏠</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headText}>Powdery Mildew</Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://www.greenlife.co.ke/wp-content/uploads/powdery_mildew_cucurbits.jpg',
          }}
        />
        <Text style={styles.bodyText}>
          A fungal disease in which infected plant display white powdery spot on
          the leaves and stem. Lower leaves are most affected in the beginning
          ,as the disease progresses it may affect any part and the spots get
          larger.
        </Text>
        <Text
          style={{
            textAlign: 'left',
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
            fontFamily: 'Lucida Calligraphy',
            fontWeight: 'bold',
            color: 'white',
          }}>
          TREATEMENT
        </Text>

        <Text style={styles.bodyText}>
          Combine one tablespoon baking soda and one-half teaspoon of liquid,
          non-detergent soap with one gallon of water, and spray the mixture
          liberally on the plants.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#00ff00',
    height: '130%',
  },
  headText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Castellar',
  },
  bodyText: {
    marginLeft: 25,
    marginRight: 25,
    textAlign: 'justify',
    fontFamily: 'Lucida Calligraphy',
    fontWeight: 'bold',
  },
  textContainer: {
    backgroundColor: 'gold',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -60,
  },
  home: {
    color: 'white',
    padding: 20,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: -75,
  },
});
