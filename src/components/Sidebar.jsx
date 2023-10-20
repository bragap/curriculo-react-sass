// import imagem de perfil
import Avatar from "../img/perfil.jpg"

import '../styles/components/sidebar.scss'

function Sidebar() {
  return <aside id="sidebar">
    <img src={Avatar} alt="Pedro Braga"/>
    <p className="title">Desenvolvedor</p>
    <p>redes sociais</p>
    <p>informações de contato</p>
    <a href="" className="btn">Download currículo</a>

  </aside>
}

export default Sidebar