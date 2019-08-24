import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.github.com/users/ravindrasinghshah')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

      return(
        <View style={{flex: 1, padding:20}}>
        <Image source={{uri:this.state.dataSource.avatar_url}} style={{width: 80, height:80}} />
        <Text>{this.state.dataSource.login} </Text>
        </View>
      );
    }
  }

