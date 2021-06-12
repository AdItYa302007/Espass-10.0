import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem,Icon,Button } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';


export default class HomeScreen extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
      AppPasswords : []
    }
  this.requestRef= null
  }

  getAppPasswords =()=>{
    this.requestRef = db.collection("details")
    .onSnapshot((snapshot)=>{
      var AppPasswords = snapshot.docs.map((doc) => doc.data())
      this.setState({
        AppPasswords : AppPasswords
      });
    })
  }

  componentDidMount(){
    this.getAppPasswords()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <Card>
    
    
    <Card.Cover source={require('../assets/'+item.AppName+'.png')} />
    <Card.Content>
      <Title>{item.AppName}</Title>
      <Paragraph>Date Created:{item.DateCreated}</Paragraph>
    </Card.Content>
    
  </Card>
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Saved Passwords" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.AppPasswords.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>No Passwords Saved!!</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.AppPasswords}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
        <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#fff'

            }}>
        <View style={{ position: 'absolute', padding: 5, alignSelf: 'center', backgroundColor: '#fff', width: 70, height: 70, borderRadius: 35, bottom: 25, zIndex: 5 }}>
                    <Button
                        icon={{
                            name: 'plus',
                            type: 'feather',
                            color: '#fff',
                            style: { marginRight: 0 }
                        }}
                        onPress={() => this.props.navigation.navigate('PasswordSaverScreen')}
                        buttonStyle={{ backgroundColor: '#000', width: 60, height: 60, borderRadius: 30 }}
                        containerViewStyle={{ alignSelf: 'center' }}
                    />
                </View>
                <View style={{ position: 'absolute', backgroundColor: '#3F51B5', bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                    <Icon
                        name='list'
                        type='feather'
                        color='#fff'
                        onPress={() => this.doSomething()} // Ex : openDrawer() in react-navigation

                    />
                   
                </View>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#44278f",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  },
  subheading: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
  },
  cardHeader: {
    backgroundColor: '#44278f',
  },
  footer: {
    width: '100%',
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

