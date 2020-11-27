import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Stem2 extends Component {
  changeScreen1 = () => {
    this.props.navigation.navigate('Stem3');
  };

  changeScreen2 = () => {
    this.props.navigation.navigate('Stem3_1');
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
        <Text style={styles.headText}>Scale Insect</Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://www.planetnatural.com/wp-content/uploads/2012/12/scale-insects-1.jpg',
          }}
        />
        <Text style={styles.bodyText}>
          Most scale insects are very small, usually ranging in size from 1/16
          to 1/8 inch long. Scale almost always appears in clusters. Unlike
          other insects, they are immobile once they lock themselves into place
          to pierce the plant and begin feeding on sap.
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
          Insecticide sprays, like neem oil, are available at garden centers.
          Spray applications should be timed to coincide with the crawler stage,
          which is most susceptible to insecticides. Insecticides must be
          applied thoroughly each week for a month or more for the greatest
          results.
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
