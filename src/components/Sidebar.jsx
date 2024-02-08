// import de componentes
import SocialNetworks from "./SocialNetworks"

// import imagem de perfil
import Avatar from "../img/perfil.jpg"

import '../styles/components/sidebar.scss'
import InformationContainer from "./InformationContainer"

function Sidebar() {
  return <aside id="sidebar">
    <img src={Avatar} alt="Pedro Braga"/>
    <p className="title">Desenvolvedor Web com <br></br>Especialização em React e Sass</p>
    <SocialNetworks/>
    <InformationContainer/>
    <a href="https://drive.google.com/file/d/1-Gb65gQNOLLobdWmh1YM7fpEcY56bTPq/view?usp=sharing" target="_blank" className="btn">Download currículo</a>

  </aside>
}

export default Sidebar
