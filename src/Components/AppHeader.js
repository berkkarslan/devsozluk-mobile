import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  Header, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation';

class AppHeader extends Component {
  render() {
    return (
     
        <Header style={styles.header}>
          <Left>

          </Left> 
          <Body>
            <Text style={styles.title}>DEVSozluk</Text>
          </Body>
          <Right>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('PostInsert')}>
            <Icon name="plus" color="#fff" size={20} style={{marginRight:15}}/>
            </TouchableOpacity>
           
          </Right>

        </Header>
    
    );
  }
}

export default withNavigation(AppHeader);

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