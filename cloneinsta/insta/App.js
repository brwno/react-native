import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Joana Elena',
      comment: 'Linda foto!'
    },{
      nickname: 'Rafael',
      comment: 'Que péssimo!'
    }]

    return (
      <View style={{ flex:1 }}>
          <Header /> 
          <Post image={require('./assets/imgs/fence')} />
          comments={comment}
    </View>
          )
  }
}
