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

var REQUEST_URL = 'https://cafbsite.herokuapp.com/api/products/?format=json';


class AwesomeProject extends Component {

    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            upcs: responseData.results,
            count: responseData.count,
          });
        })
        .done();
    }

    componentDidMount() {
      this.fetchData();
    }

    constructor(props) {
      super(props);
      this.state = {
        upcs: null,
      };
    }


    render() {
        if (!this.state.upcs) {
          return this.renderLoadingView();
        }

        var upc = this.state.upcs[1];
        return this.renderUPC(upc);
      }

      renderLoadingView() {
        return (
          <View style={styles.container}>
            <Text>
              Loading UPC Data...
            </Text>
          </View>
        );
      }

      renderUPC(upc) {
        return (
          <View style={styles.container}>
            <View style={styles.rightContainer}>
                <Text>Code: {upc.gtin_code}</Text>
                <Text>Name: {upc.gtin_name}</Text>
                <Text>Created: {upc.created}</Text>
                <Text>Requested</Text>
            </View>
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
