import React from 'react'
import Membro from '../relacao/Membro'
import { Text, View } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <>
        <Text>Membros da Familia:</Text>
        {props.children}
        </>
        

    )
}