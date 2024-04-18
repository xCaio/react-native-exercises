import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Primeiro from "../src/components/Primeiro"
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";
import CompPadrao, {Comp1, Comp2} from "./components/Multi";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
// import Pai from "./components/direta/Pai";
import Pai from "./components/indireta/Pai";
import ContadorV2 from './components/contador/ContadorV2';
import ParImpar from "./components/ParImpar";
import CondRel from "./pratica/CondRel";
import Familia from "./components/relacao/Familia";
import Membro from "./components/relacao/Membro";
import UsuarioLogado from "./components/UsuarioLogado";
export default () => (
    <SafeAreaView style={styles.App}>
        

        
        {/* <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/> */}
        
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}

        {/* <Aleatorio min={1} max={1000} /> */}
        
        {/* <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do produto"/> */}
        
        {/* <Botao/> */}

        {/* <Contador inicial={100} passo={10}/>
        <Contador /> */}
        {/* <Pai/> */}
        {/* <ContadorV2 /> */}
        {/* <CondRel num={13}/> */}
        {/* <Familia>
            <Membro nome="Teste" sobrenome="Children"/>
            <Membro nome="Caio" sobrenome="Santos"/>
        </Familia > */}
        <UsuarioLogado usuario={{nome: "Caio", email: "caio123@gmail.com"}}/>
        <UsuarioLogado usuario={{nome: "Caio"}}/>
        <UsuarioLogado usuario={{nome: "Passou", email: "Valido"}}/>

    </SafeAreaView>
)

const styles = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})