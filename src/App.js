import React from "react";
import { View, StyleSheet } from "react-native";
import Primeiro from "../src/components/Primeiro"
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";

import CompPadrao, {Comp1, Comp2} from "./components/Multi";

export default () => (
    <View style={styles.App}>
        {/* <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/> */}
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
        {/* <Aleatorio min={1} max={1000} /> */}
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do produto"/>
    </View>
)

const styles = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})