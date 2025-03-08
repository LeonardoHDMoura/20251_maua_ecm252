import Pedido from "./Pedido"
const App = () => {
  return (
    <div className="container border mt-2">
      <div className="row">
        <i className="fa-solid fa-hippo fa-6x fa-spin"></i>
        <div className="col-lg-6 col-xxl-3">
          <Pedido
            data={new Date().toDateString()}
            titulo="SSD"
            descricao="Um SSD de 512Gb"
            icone="hdd" />
        </div>

        <div className="col-lg-6 col-xxl-3">
          <Pedido
            data={new Date().toDateString()}
            titulo="Livro"
            descricao="Harry Potter"
            icone="book" />
        </div>

        <div className="col-lg-6 col-xxl-3">
          <Pedido
            data={new Date().toDateString()}
            titulo="Hippo"
            descricao="Um hippo :D"
            icone="hippo" />
        </div>

        <div className="col-lg-6 col-xxl-3">
          <Pedido
            data={new Date().toDateString()}
            titulo="Boneco de Neve"
            descricao="Um boneco de neve que balança sozinho"
            icone="snowman fa-shake" />
        </div>

      </div>
      <div className="row">
        <i className="fa-solid fa-hippo fa-6x fa-spin fa-spin-reverse"></i>
      </div>
    </div>
  )
}
export default App