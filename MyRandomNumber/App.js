import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Button,
} from 'react-native-paper';

//Between 0 and 100
const RandomNumber = () => Math.floor((Math.random() * (100 - 1)) + 1);

const MyRandomNumber = () => {

  const [number, setNumber] = React.useState(0);

  const getNumber = () => setNumber(RandomNumber());

  return(
      <SafeAreaView style={styles.container}>
        <View>            
            <Text style={styles.display}>{number}</Text>
        </View>
        <Button style={styles.button} mode="contained"  onPress={getNumber}>Click Here</Button>
      </SafeAreaView>
  )
}

export default MyRandomNumber;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  display:{
    fontFamily:'Arial',
    fontSize:100,    
  },
  button:{
     backgroundColor:'#0c62ed',    
  }
})