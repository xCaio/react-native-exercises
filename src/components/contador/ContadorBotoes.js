import React from 'react'
import {Button, StyleSheet, View} from 'react-native'


export default props => {
    return(
        <View style={styles.botoes}>
            <Button title='+' onPress={props.inc} />
            <Button title='-' onPress={props.dec} />
        </View>
    )
}
const styles = StyleSheet.create({
    botoes:{
        flexDirection: "row"
    }
})