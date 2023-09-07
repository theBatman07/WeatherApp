import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const {main: { temp, feels_like, temp_max, temp_min }, weather} = weatherData
  const weatherCondition = weather[0].main 
  return(
    <SafeAreaView style={[styles.wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={styles.tempStyles}>{temp}°C</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}°C`}</Text>
        <RowText messageOne={`High: ${temp_max}°C  `} messageTwo={`Low: ${temp_min}°C`} containerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow} />
       </View>
       <RowText messageOne={weather[0].description} messageTwo={weatherType[weatherCondition].message} containerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message} />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    justifyContent: 'center'
  },
  tempStyles:{
    color: "white",
    fontSize: 48
  },
  feels: {
    color: "white",
    fontSize: 30
  },
  highLow:{
    color: "white",
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end', //To display the content at the bottom of the screen
    alignItems: 'flex-start', //text display at the far left of the screen 
    paddingLeft: 25,
    marginBottom: 40 
  },
  description:{
    color: 'white',
    fontSize: 43
  },
  message:{
    color: 'white',
    fontSize: 25
  }
})

export default CurrentWeather