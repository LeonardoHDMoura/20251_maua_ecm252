function ListaComentarios(props){
    return(
    <div className="container border mt-2">
      <div className="row">
        {props.children}
      </div>
    </div>
    )
}

export default ListaComentarios