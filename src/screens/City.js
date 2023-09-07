import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from "react-native";
import IconText from "../components/IconText";
import moment from "moment/moment";

const City = ({ weatherData }) => {
    const { name, coutry, population, sunrise, sunset} = weatherData
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
                <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
                <Text style={[styles.countryName, styles.cityText]}>{coutry}</Text>
                <View style={[styles.populationWrapper, styles.rowLayout]}>
                    <IconText iconName={'user'} iconColor={'white'} bodyText={`Population: ${population}`} bodyTextStyles={styles.populationText} />
                </View>
                <View style={[styles.riseSetWrapper, styles.rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss ')} bodyTextStyles={styles.riseSetText} />
                    <Text style={[styles.am,styles.rowLayout]}>AM</Text>
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={moment(sunset).format('h:mm:ss A')} bodyTextStyles={styles.riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout:{
        flex: 1
    },
    cityName:{
        fontSize: 30
    },
    countryName:{
        fontSize: 30
    },
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    populationWrapper:{
        justifyContent: 'center'
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white'
    },
    riseSetWrapper:{
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white',
        paddingLeft: 120,
        paddingRight: 120
    },
    rowLayout:{
        flexDirection: 'row',
        fontSize: 20,
        alignItems: 'center'
    },
    am:{
        color: 'white',
        paddingTop: 50,
        paddingRight: 80,
        fontWeight: 'bold'
    }
})

export default City