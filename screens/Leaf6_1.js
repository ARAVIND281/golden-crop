import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class Leaf6_1 extends Component {
  render() {
    return (
      <ScrollView style={styles.background}>
        <View>
          <Header
            centerComponent={{ text: 'GOLDEN CROP', style: { color: '#028910', fontSize: RFValue(20), fontWeight: "bold", } }}
            rightComponent={<Text style={{
              fontSize: RFValue(30),
              fontWeight: 'bold',
            }}
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}>🏠</Text>}
            leftComponent={<Image
              style={{ height: 50, width: 50 }}
              source={require('../image.png')}
            />}
            backgroundColor="gold"
          />
        </View>
        <View style={{ marginTop: 10 }}></View>
        <Text style={styles.headText}>Anthracnose</Text>
        <View style={{ marginTop: 20 }}></View>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://www.planetnatural.com/wp-content/uploads/2012/12/anthracnose-1.jpg',
          }}
        />
        <View style={{ marginTop: 20 }}></View>
        <Text
          style={{
            textAlign: 'left',
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          TREATEMENT
        </Text>
        <View style={{ marginTop: 20 }}></View>
        <Text style={styles.bodyText}>
          Neem oil spray is an organic, multi-purpose
          fungicide/insecticide/miticide that kills eggs, larvae and adult
          stages of insects as well as prevents fungal attack on plants. Apply
          early, at the first sign of spring budding, every 7-14 days as a
          preventative measure or on a 7-day schedule until existing problems
          are eliminated.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#98EDC3',
    height: '130%',
  },
  headText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 23,
    fontWeight: 'bold',
  },
  bodyText: {
    marginLeft: 25,
    marginRight: 25,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 19,
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
