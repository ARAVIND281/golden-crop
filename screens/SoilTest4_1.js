import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class SoilTest4_1 extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#d3d3d3' }}>
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
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
          }}>
          Test Result
        </Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://gardenerspath.com/wp-content/uploads/2017/07/Some-Say-Peat-Moss-is-Indispensable.jpg',
          }}
        />
        <Text style={{ textAlign: 'center' }}>Your soil is Peat Soil</Text>
        <Text
          style={{
            marginLeft: 25,
            marginRight: 25,
            textAlign: 'justify',
          }}>
          Peat soil is great for growth when blended with rich organic matter,
          compost and lime to reduce the acidity. You can also use soil
          amendments such as glacial rock dust to raise pH in acidic soils.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
