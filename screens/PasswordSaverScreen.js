import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
  } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';

  export default class PasswordSaver extends React.Component {
    render(){

    return (
<View>
<LinearGradient
        colors={['90deg', '#1f005c', '#5b0060', '#870160', '#ac255e', '#ca485c', '#e16b5c', '#f39060', '#ffb56b' ]}
        style={styles.linearGradient}
        locations={[0, 0.3, 0.9]}
      >
        <Text>V. Location Gradient</Text>
      </LinearGradient>


      
</View>
    )
   }
}