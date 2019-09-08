import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem, Thumbnail, Button, Left, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class PostListItem extends Component {
    render() {
        return (
            <Card style={{ flex: 0 }}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'https://avatars1.githubusercontent.com/u/15016801?s=460&v=4' }} />
                        <Body>
                            <Text style={{ fontWeight: "600" }}>{this.props.data.item.fullname.toUpperCase()}</Text>
                            <Text note>{this.props.data.item.createdtime}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {this.props.data.item.description}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer bordered >
                    <Left>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                            <Icon name="hands-helping" size={20} color="#339af0" />
                            <Text> 12</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        )
    }
}


