import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos';

export default props => {
    function renderProduct(){
        return ({item}) => <Text>{item.id} - {item.nome} - R${item.preco}</Text> 
    }
    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos usando FlatList</Text>
            <FlatList 
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={renderProduct()}
            
            />
        </>
    )
}