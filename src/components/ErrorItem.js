import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

const ErrorItem = () =>{
    return(
        <View style={styles.container}>
            <SimpleLineIcons name="emotsmile" size={100} color="white" />
            <Text style={styles.errorMessage}>Ha ha ha</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage:{
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    }
})

export default ErrorItem