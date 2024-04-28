import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import Estilo from '../estilo'
import testeProdutos from './testeProdutos'

export default props => {
    function produtos() {
        return ({ item }) => <Text>{item.id} e {item.nome} e {item.preco}</Text>
    }
    return (
        <>
            <Text style={Estilo.txtG}>Olá</Text>
            <FlatList
                data={testeProdutos}
                keyExtractor={item => item.id}
                renderItem={produtos()}
            />
        </>
    )
}