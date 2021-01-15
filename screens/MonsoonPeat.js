import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { RFValue } from "react-native-responsive-fontsize";
import { Header } from 'react-native-elements';

export default class MonsoonPeat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        ['Beans', '50 to 55 days'],
        ['Carrot', '70 to 80 days'],
        ['Cow Peas', '4 to 5 months'],
        ['Chickpea', 'about 100 days']
      ]
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: '#FFE2CF', height: '300%' }}>
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
        <Text style={{ color: 'blue', textAlign: 'center', fontWeight: 'bold', fontSize: RFValue(20), marginTop: RFValue(20) }}>CROP FOR YOUR SOIL</Text>
        <View style={{ marginTop: RFValue(20) }}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={['Plant Name', 'Duration']} style={styles.head} textStyle={[styles.text1, { color: 'red', fontSize: RFValue(20) }]} />
            <Rows data={this.state.tableData}
              textStyle={styles.text1}
            />
          </Table>
        </View>
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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text1: { margin: 6, fontWeight: 'bold', fontSize: RFValue(18) }
});