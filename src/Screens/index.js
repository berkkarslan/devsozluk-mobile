import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import AppHeader from '../Components/AppHeader'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
        posts:false,
        isLoading:true
    };
  }

  componentDidMount(){
    fetch('https://berkarsln.com/api/posts')
    .then((res) => {return res.json()})
    .then((res) => this.setState({posts:res.data.posts,isLoading:false}));

  }

  _renderItem = ({item}) => (
    <View style={styles.postsItem}>
      <Text style={styles.postTitlle}>{item.title}</Text>
      <Text style={styles.postDescription}>{item.description}</Text>
    </View>
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    if(this.state.isLoading){ return(<View style={styles.base}><Text>Yükleniyor</Text></View> )}

      return (
        <View style={{flex:1}}>
          <AppHeader  style={styles.base}/>
          <View>
          </View>
          <View>
            <FlatList 
            data={this.state.posts} 
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
          </View>
        </View>
      );
    }
    

}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postTitlle:{
    fontSize:21,
    borderBottomWidth:1,
    borderBottomColor:'#000'
  },
  postsItem:{
    borderWidth:1,
    borderColor:'#919191'
  }
})