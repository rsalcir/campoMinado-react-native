
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';


export default class App extends Component {
  render (){
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Iniciando projeto...</Text>
        </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});
