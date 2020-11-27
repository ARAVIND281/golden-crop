import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Leaf6_1 extends Component {
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
        <Text style={styles.headText}>Anthracnose</Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://www.planetnatural.com/wp-content/uploads/2012/12/anthracnose-1.jpg',
          }}
        />
        <Text style={styles.bodyText}>
          Infected plants develop dark, water soaked lesions on stems, leaves or
          fruit. The centers of these lesions often become covered with pink,
          gelatinous masses of spores especially during moist, warm weather.
          Anthracnose can reduce a beautiful harvest into rotted waste in just a
          few days. It is spread by wind, rain, insects and garden tools.
        </Text>
        <Text
          style={{
            textAlign: 'left',
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
            fontFamily: 'Lucida Calligraphy',
            fontWeight: 'bold',
          }}>
          TREATEMENT
        </Text>
        <Text style={styles.bodyText}>
          Neem oil spray is an organic, multi-purpose
          fungicide/insecticide/miticide that kills eggs, larvae and adult
          stages of insects as well as prevents fungal attack on plants. Apply
          early, at the first sign of spring budding, every 7-14 days as a
          preventative measure or on a 7-day schedule until existing problems
          are eliminated.
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
