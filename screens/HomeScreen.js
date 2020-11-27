import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  Linking,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#cbe3ee' }}>
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
          <Image
            style={{ height: 70, width: 300, marginTop: -75, alignSelf: 'center' }}
            source={{
              uri:
                'https://78.media.tumblr.com/63273c0fd6d464bb267d638e584ec8a7/tumblr_p1wli7n7021vpf6ddo1_500.gif',
            }}
          />
        </View>
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CropTreatment1')}>
              <Image
                style={{
                  height: 85,
                  width: 250,
                  marginTop: 10,
                  marginLeft: 10,
                }}
                source={require('../CROPTRE-button.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CropSelection1')}>
              <Image
                style={{
                  height: 85,
                  width: 250,
                  marginTop: 10,
                  marginLeft: 10,
                }}
                source={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/inbo-chat-a81c7.appspot.com/o/c203fb1c82906d48c89e802129d7d980.png?alt=media&token=8a5353c9-8bf5-4ca1-93c2-e87ad0818d5d',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SoilTest1')}>
              <Image
                style={{
                  height: 85,
                  width: 250,
                  marginTop: 10,
                  marginLeft: 10,
                }}
                source={require('../SOILTEST-button.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Intro')}>
              <Image
                style={{
                  height: 50,
                  width: 150,
                  marginTop: 10,
                  marginLeft: 10,
                }}
                source={require('../aboutbutton.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
    marginTop: 45,
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
