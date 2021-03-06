import React from 'react';
import TypeWriter from 'react-native-typewriter';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Header } from 'react-native-elements';

export default class Intro extends React.Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/inbo-chat-a81c7.appspot.com/o/color%20card.jpg?alt=media&token=b73e7f04-d923-4a63-9252-7c5627bd3213',
          }}
          style={styles.image}>
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
          <TypeWriter typing={1} style={styles.textmain}>
            Farmers are the backbone of our society. They play a pivotal role in
            any nation's growth. But are we paying enough attention to their
            needs? I had always been hearing such grievances in different tones
            and manner, when I visit my father's rice mill. Then popped an idea
            of creating an app in my mind.what else could be the content, other
            than something which would facilitate farmer's experience. This
            would be a promising one for clearing doubts, guiding and escalate
            them to their accomplishments. May My APP be the best tool in the
            hands of farmers.
          </TypeWriter>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}
            style={{ textAlign: 'center', alignSelf: 'center' }}>
            <Image
              style={{ height: 50, width: 150, marginTop: 10 }}
              source={require('../tap.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textmain: {
    fontSize: 20,
    color: 'black',
    textAlign: 'justify',
    //fontFamily: 'Lucida Calligraphy',
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10,
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
