import React from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'

export default ({num = 0}) => {

        return (
            <View>
                <Text style={estilo.txtG}>O resultado é:</Text>
                {num % 2 === 0
                 ? <Text style={estilo.txtG}>Par</Text> 
                 : <Text style={estilo.txtG}>Impar</Text>
                }
                
            </View>
        )
}