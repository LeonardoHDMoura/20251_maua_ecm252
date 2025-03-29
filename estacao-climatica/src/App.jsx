import React from 'react'
import Hippo from './Hippo.jsx'
import EstacaoClimatica from './EstacaoCLimatica.jsx'

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }
  // constructor(props){
  //   super(props)
  //   this.state ={
  //     latitude: null,
  //     longitude: null,
  //     estacao: null,
  //     data: null,
  //     icone: null,
  //     mensagemDeErro: null
  //   }
  //   console.log('construtor')
  // }

  componentDidMount(){
    console.log('componentDidMount')
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentDidUnmount')
  }

  estacoes = {

    VERAO: {
      icone: "sun",
      nome:  "Verao"
    },
  
    INVERNO: {
      icone: "snowman",
      nome:  "Inverno"
    },
  
    OUTONO: {
      icone: "leaf",
      nome:  "Outono"
    },
  
    PRIMAVERA: {
      icone: "fan",
      nome:  "Primavera"
    }
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    const d2 = new Date(anoAtual, 8, 24)
    const d3 = new Date(anoAtual, 11, 22)
    const d4 = new Date(anoAtual, 2, 21)
    const estouNoSul = latitude < 0
    if(data >= d1 && data < d2)
      return estouNoSul ? this.estacoes.INVERNO : this.estacoes.VERAO
    if(data >= d2 && data < d3)
      return estouNoSul ? this.estacoes.PRIMAVERA : this.estacoes.OUTONO
    if(data >= d3 || data < d4)
      return estouNoSul ? this.estacoes.VERAO : this.estacoes.INVERNO
    return estouNoSul ? this.estacoes.OUTONO : this.estacoes.PRIMAVERA
  }

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //1. extrair a data atual do sistema
        const novaData = new Date()
        //2. obter a estacao climatica do usuario usando sua latitude e data atual
        const estacao = this.obterEstacao(novaData, position.coords.latitude)
        //3. obter o icone para aquela estação
        //4. atualizar o estado, causando, como efeito colateral, atualização da tela
        //dica? usar função setState
        this.setState({
          data : novaData.toLocaleTimeString(),
          estacao: estacao.nome,
          icone: estacao.icone, 
          latitude : position.coords.latitude,
          longitude : position.coords.longitude
        })
      },
      (err) => {
        this.setState({mensagemDeErro : "Não rolou"})
      }
    )
  }


  render(){
    console.log('render')
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <div className="justify-content-center d-flex">
              {//<i className="fas fa-hippo fa-4x fa-spin"></i>
              }
              <Hippo 
              willSpin = {this.state.willSpin}/>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 col-xxl-4">
             <EstacaoClimatica 
             latitude = {this.state.latitude}
             longitude = {this.state.longitude}
             estacao = {this.state.estacao}
             data = {this.state.data}
             icone = {this.state.icone}
             mensagemDeErro = {this.state.mensagemDeErro}
             obterLocalizacao = {this.obterLocalizacao}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App