import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppHeader from '../Components/AppHeader';
import PostListItem from '../Components/PostListItem';
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

 

  render() {
    if(this.state.isLoading){ return(<View style={styles.base}><ActivityIndicator  /></View> )}

      return (
        <View style={{flex:1}}>
          <AppHeader  style={styles.base}/>
          <View>
          </View>
          <View>
            <FlatList 
            data={this.state.posts} 
            keyExtractor={ (item, index) => item.id.toString()}
            renderItem={(item) => <PostListItem data={item}/>}
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