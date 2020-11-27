import * as React from 'react';
import { Text, View, StyleSheet, Image,Linking, TouchableOpacity } from 'react-native';

class AppHeader extends React.Component {
  goHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    return (
      <View style={styles.textContainer}>
        <Image
          style={{ height: 50, width: 50, marginTop: 10, marginLeft: 10 }}
          source={require('../image.png')}
        />
        <Text style={styles.text}>GOLDEN CROP</Text>
        
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
});

export default AppHeader;
