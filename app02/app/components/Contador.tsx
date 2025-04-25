import React from 'react'; //importar React para react native funcionar
import {Text, Button, View, StyleSheet} from 'react-native'; //Importando componentes pré-feitos para react native
//Text = texto, Button = botão, View = container, mas obrigatória para exibir algo na tela, StyleSheet = Folha de estilos de JavaScript


export default class Contador extends React.Component { //Exportação função padrão com todos os componentes de React, Contador é o nome
    constructor() { //Classe que construi as características de um objeto, é um método vazio que não recebe parâmetros (mas pode)
        super(); //Herda todas as caracteristicas de um objeto
        this.state = { //Declaração de variável, "this.state" declara variável (estado) {contador: 0} valor da variável
            contador: 0,
        };
    } //Construdtor é uma variável orientada a objeto
    Decrementar(){ //Forma de manipular uma variável 
        this.setState({ //variáveç, setState é uma função que manipula o estado (variável)
            contador: this.state.contador - 1 //Manipula o contador subtraindo 1
        });
    }
    Incrementar(){ //Forma de manipular uma variável
        this.setState({
            contador: this.state.contador + 1 //Manipula o contador subtraindo 1
        });
    }
    render () { //Função vazia relacionada ao front end, que exibe coisas na tela
        return ( //Retorna código react native
            <View> 
             <View style={styles.texto}> 
                <Text>{this.state.contador}</Text>
             </View>
            <View style={styles.botoes}>
             <Button 
                style={styles.botao1}
                title="Aumenta"
                onPress={this.Incrementar.bind(this)}
             /> 
            <Button
            style={styles.botao2}
            onPress={this.Decrementar.bind(this)}
            title="Diminui"
            />
         </View>
     </View>
    ); } } 

 const styles = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: 300,
        height: 45,
      },
      texto: {
          alignItems: 'center',
          top: 200,
     },
});