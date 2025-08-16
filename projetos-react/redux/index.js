const Redux = require('redux')
const { createStore, combineReducers } = Redux
const criarContrato = (nome, taxa) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: {
            nome: nome,
            taxa: taxa
        }
    }
}

const cancelarContrato = (nome, multa) => {
    return {
        type: "CANCELAR_CONTRATO",
        payload: {
            nome: nome,
            multa: multa
        }
    }
}

const solicitarCashback = (nome, valor) => {
        return {
            type: "SOLICITAR_CASHBACK",
        payload: {
            nome: nome,
            valor: valor
        }
    }
}

const validarCashback = (lista=[], acao) => {
    let listaAux = [...lista]
    if (acao.type === "SOLICITAR_CASHBACK"){
            listaAux.push(acao.payload)
            return listaAux
    }
    return listaAux
}

const caixa = (valorEmCaixa=0, acao) => {
    return(acao.type === "CRIAR_CONTRATO" 
        ?
        valorEmCaixa + acao.payload.taxa
        :
        acao.type === "SOLICITAR_CASHBACK" 
        ?
        valorEmCaixa - acao.payload.valor
        :
        acao.type === "CANCELAR_CONTRATO"
        ?
        valorEmCaixa + acao.payload.multa :
        valorEmCaixa
    ) 
    
}

const contratos = (lista=[], acao) => {
    return(
        acao.type === "CRIAR_CONTRATO"
        ?
        [...lista, acao.payload]
        :
        acao.type === "CANCELAR_CONTRATO"
        ?
        [...lista].filter(contrato => contrato.nome !== acao.payload.nome)
        :
        lista
    )
}

const todosOsReducers = combineReducers({
    validarCashback,
    caixa,
    contratos
})

const store = createStore(todosOsReducers)


store.subscribe(() => console.log(`Estado atual: `, store.getState()))

store.dispatch(criarContrato("José", 50))

store.dispatch(criarContrato("Maria", 50))

store.dispatch(solicitarCashback("Maria", 10))

store.dispatch(solicitarCashback("José", 20))

store.dispatch(cancelarContrato("Maria", 500))