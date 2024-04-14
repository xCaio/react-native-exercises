//// DESAFIO #001
//Faça um código que receba 2 numeros como parâmetro minimo e máximo e gerem de forma aleatoria um numero entre o valor minimo e o maximo e mostre na tela
////

import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";
export default props => {
    const random = Math.random();
    return(
        <Text style={estilo.txtM}>Um numero aleatório entre {props.min} e o número máximo: {props.max} seria o numero: {Math.floor(random * props.max - props.min + 1) + props.min}</Text>
        // <Text style={estilo.txtM}>Numero Aleatório entre {Math.ceil(props.min)} e o número máximo: {Math.floor(props.max)} é o numero: {Math.floor(random * props.max - props.min + 1) + props.min}</Text>
    );
}
