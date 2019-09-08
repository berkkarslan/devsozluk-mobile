import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Header, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class AppHeader extends Component {
  render() {
    return (
     
        <Header style={styles.header}>
          <Left>

          </Left>
          <Body>
            <Text style={styles.title}>DEVSozluk</Text>
          </Body>
          <Right>
            <Icon name="plus" color="#fff" size={20} style={{marginRight:15}}/>
          </Right>

        </Header>
    
    );
  }
}

const styles = StyleSheet.create({
    header: {
    color:'#fff',
    backgroundColor:'#26ae61',
  },
  title:{
      color:'#fff',
      fontFamily:'Roboto',
      fontSize:17
  }
})