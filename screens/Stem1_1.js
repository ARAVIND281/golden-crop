import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Stem1_1 extends Component {
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
        <Text style={styles.headText}>GALL</Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://d1u82yn7miridg.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1hc3NldHMiLCJrZXkiOiJfcHVibGljXC9fZmlsZXNcL3N5c3RlbVwvY29udGVudC1hcnRpY2xlc1wvaW1hZ2VzXC9ib2R5XC9hNTA0NWNmMDQxOWU5YTllNzFhOTMwYjYwNjY3MTZkY2UyYWM0NzZmXzYwMHg3MzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3MDAsImZpdCI6ImNvdmVyIn19fQ==',
          }}
        />
        <Text style={styles.bodyText}>
          Galls are abnormal growths that occur on leaves, twigs, roots, or
          flowers of many plants. Most galls are caused by stimulation of plant
          cells due to feeding or egg-laying by insects
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
          In many cases, existing galls can be removed with a sharp pruning
          knife. Destroy the infected plant tissue and treat the wound with
          pruning sealer. If the plant does not recover, remove and destroy it.
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
