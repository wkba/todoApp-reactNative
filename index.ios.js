
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native';

const Firebase = require('firebase');

class devFirebase extends Component {
  constructor(props){
  	super(props);
  	var myFirebaseRef = new Firebase("https://first-3b7f5.firebaseio.com");

  	// myFirebaseRef.set({
  	// 	title: 'Hello world',
  	// 	author: 'waka',
  	// });

  	this.itemRef = myFirebaseRef.child('items');

  	this.state = {
  		newTodo: '',
  		tosoSource: new ListView.DataSource({rowHasChanged: (row1,row2) => row !== row2})
  	};

  	this.items =[];
  }
  componentDidMount(){
  	this.itemRef.on('child_added', (dataSnapshot) =>{
  	  this.items.push({id: dataSnapshot.key(), text:dataSnapshot.val()});
  	  this.setState({
  	  	tosoSource: this.state.todoSource.cloneWithRows(this.items)
  	  })
  	});
  	}
  }


}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('devFirebase', () => devFirebase);
