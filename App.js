import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, Touchable, FlatList } from 'react-native';

export default App = () =>  {

  const {currdata, setdata} = useState([
    {option:'Option A', key:'1'},
    {option:'Option B', key:'2'},
    {option:'Option C', key:'3'},
    {option:'Option D', key:'4'},
    {option:'Option E', key:'5'},
    {option:'Option F', key:'6'},
    {option:'Option G', key:'7'},
    {option:'Option H', key:'8'},
  ])


  return (
      <ScrollView style={mystyle.viewstyle}>
        {currdata.map((item)=>(
          <Touchable>
          <Text key={item.key} style={mystyle.mytext}>
            {item.option}
          </Text>
          </Touchable>
        ))}
      </ScrollView>
  );
}

const mystyles = StyleSheet.create({

  viewstyle:{
    marginTop:40,
  },
  mytext:{
    color:"black",
    fontSize:30,
    backgroundColor:"yellow",
    padding:10,
    margin:10,
    borderRadius:15,
  },
  // myimage:{
  //   width:300,
    // height:150,
    // backgroundColor:"yellow",
    // resizeMode:"contain",
  // }
});
