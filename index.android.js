/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View,
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
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />


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

class AwesomeProject1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
      };
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.results),
            loaded: true,
          });
        })
        .done();
    }

    render() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }

      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderUPC}
          style={styles.listView}
        />
      );
    }

    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading UPCs...
          </Text>
        </View>
      );
    }

    renderUPC(upc) {
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
  listView: {
  paddingTop: 20,
  backgroundColor: '#F5FCFF',
},
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
