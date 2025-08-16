import Comentario from "./Comentario"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
import ListaComentarios from "./ListaComentarios"
const App = () => {
  const textoOK = 'Aprovar'
  const textoNOK = 'Não aprovar'
  const funcaoOK = () =>alert('Comentário aprovado')
  const funcaoNOK = () =>alert('Comentário recusado')
  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}/>
  )
  return (
        <ListaComentarios>

        <div className="col-lg-12 col-xxl-12">

          <Cartao>
            <Comentario
              titulo="Mary.Lockman69"
              descricao="Suspendisse eget suscipit velit, in tempus lorem. Cras iaculis pellentesque arcu et pharetra. Sed mi risus, tincidunt ut scelerisque vitae, vestibulum vel nulla. Etiam eget vehicula velit. Sed sagittis iaculis semper. Maecenas euismod suscipit magna, interdum volutpat nulla ultricies placerat. Duis non dolor a magna pharetra auctor vitae ut magna. Nullam diam massa, facilisis et leo sit amet, tristique luctus urna. Nam sit amet pellentesque tellus, quis aliquet ante."
              icone="https://cdn-icons-png.flaticon.com/256/56/56832.png"
              data={new Date().toDateString()} />
              {componenteFeedback}
          </Cartao>


        </div>

        <div className="col-lg-12 col-xxl-12">

          <Cartao>
            <Comentario
              titulo="Brock_Reichel18"
              descricao="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ultricies vestibulum enim nec ornare. Sed ut consectetur est. Mauris et felis pharetra leo placerat tempus a molestie nunc. Phasellus tristique nisi id elit sodales, pellentesque ornare ex vestibulum. Duis elementum ut nunc in pretium. Morbi fringilla, lorem et malesuada mattis, purus risus feugiat enim, eget faucibus sem lacus sed ligula. Fusce dictum turpis ut erat pellentesque, tempus venenatis orci tincidunt. Etiam sit amet purus at diam congue ornare eget in ipsum. Sed non egestas quam. Nam et sem in mi ullamcorper pellentesque. Ut in euismod odio, eu dignissim nibh. Vivamus varius, metus ac dapibus auctor, tellus elit malesuada magna, nec congue sapien est ac nisl. Vestibulum molestie, lacus in maximus iaculis, sapien orci ullamcorper enim, fringilla vulputate turpis magna non libero. Nulla aliquam odio vitae tempor rutrum. Sed porttitor sapien sed elit mattis venenatis."
              icone="https://cdn-icons-png.flaticon.com/256/56/56832.png"
              data={new Date().toDateString()} />
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-lg-12 col-xxl-12">

          <Cartao>

            <Comentario
              titulo="Nils_Steuber"
              descricao="Praesent vehicula, diam vitae aliquet bibendum, dolor enim tempor sem, non dignissim eros eros auctor ligula. Phasellus nec varius diam. Ut at tincidunt diam. Nullam mollis dolor turpis, tincidunt varius ex euismod eget. Cras gravida faucibus sapien quis commodo. Donec eu dolor id ante cursus dictum. Nullam rutrum erat ac ante lobortis, at fermentum mi malesuada. In maximus porttitor iaculis. Aliquam aliquet velit nec placerat aliquam. Suspendisse vel semper augue. Nulla facilisi. Quisque at ex tincidunt turpis feugiat finibus. Ut venenatis, arcu sit amet malesuada semper, ante neque luctus purus, a accumsan neque libero feugiat lorem. Pellentesque scelerisque ligula non erat egestas blandit. Proin nibh diam, porta id dui et, blandit fringilla sapien. Etiam molestie varius purus vel fermentum."
              icone="https://cdn-icons-png.flaticon.com/256/56/56832.png" 
              data={new Date().toDateString()}/>
              {componenteFeedback}
          </Cartao>
        </div>
        </ListaComentarios>
  )
}
export default App