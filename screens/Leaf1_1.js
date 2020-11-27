import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Leaf1_1 extends Component {
  changeScreen1 = () => {
    this.props.navigation.navigate('Leaf2');
  };

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
        <Text style={styles.headText}>CHLOROSIS</Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/e/ee/Sweetgum-leaf-interveinal-chlorosis.jpg',
          }}
        />
        <Text style={styles.bodyText}>
          The first indication of chlorosis is a paling of the green color of
          the foliage, followed later in the season by a general yellowing. In
          mild cases, the leaf tissue is pale green, but leaf veins remain
          green.
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
          Soil fertilization treatments produce the best results, but are
          usually the slowest to respond. Soil treatment is best done in early
          spring through mid-May.
        </Text>
        <Text style={styles.bodyText}>
          Apply a one-to-two inch layer of organic compost (acidic leaf mold),
          followed by three-to-four inches of organic mulch (composted
          woodchips). This will help to create more favorable soil conditions
          for roots to grow.
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
