//styles scss
import "../styles/components/maincontent.scss"
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiesContainer from "./TechnologiesContainer";

function MainContent() {
  return <main id="main-content">
    <AboutContainer/>
    <TechnologiesContainer/>
    <ProjectsContainer/>

  </main>
}

export default MainContent