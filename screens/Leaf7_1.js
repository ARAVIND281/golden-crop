import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Leaf7_1 extends Component {
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
        <Text style={styles.headText}>BLAST</Text>
        <Image
          style={{ width: 250, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://impb.ethz.ch/research/research-nkb/resistancessources/_jcr_content/par/fullwidthimage/image.imageformat.lightbox.435463652.jpg',
          }}
        />
        <Text style={styles.bodyText}>
          The fungus attacks individual grains, leaves, and the stem at the base
          of the panicle. Tiny brown spots first appear on the leaves.
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
          Split nitrogen fertilizer application in two or more treatments.
          Excessive use of fertilizer can increase blast intensity. Silicon
          fertilizers (e.g., calcium silicate) can be applied to soils that are
          silicon deficient to reduce blast.
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
