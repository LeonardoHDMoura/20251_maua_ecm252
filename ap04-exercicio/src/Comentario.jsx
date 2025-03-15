const Comentario = (props) => {
    return (
        <div className="d-flex">
            <div className="d-flex align-items-center ">
                <img src={`${props.icone}`}/>
            </div>
            <div className="flex-grow-1 py-3 ms-3">
                <h3 className="text-justify border">{props.titulo}</h3>
                <p className="text-justify">{props.descricao}</p>
                <p>{props.data}</p>
            </div>
        </div>

    )
}

export default Comentario