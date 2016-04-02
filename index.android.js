/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MOCKED_UPC_DATA = [
  {gtin_code: '2015', gtin_name: "honey", created: "2016-03-06T05:39:43.117157Z"},
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
// https://cafbsite.herokuapp.com/api/auth/upc=52009830171/?format=json
// {"gtin_code":"52009830171","gtin_name":"honey","created":"2016-03-06T05:39:43.117157Z"}


class AwesomeProject extends Component {
  render() {
      var upc = MOCKED_UPC_DATA[0];
      return (
        <View style={styles.container}>
          <Text>Code: {upc.gtin_code}</Text>
          <Text>Name: {upc.gtin_name}</Text>
          <Text>Created: {upc.created}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
