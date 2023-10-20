import {
  DiHtml5, DiCss3,
  DiJsBadge, DiReact,
  DiSass,DiGit
} from 'react-icons/di' 

import "../styles/components/technologiescontainer.scss"

const technologies = [
  {id:"js", name: "Javascript", icon: <DiJsBadge/>, desc: "Conhecimentos sólidos e avançados em JavaScript"},
  {id:"react", name: "React", icon: <DiReact/>, desc: "Experiência em React, uso de ContextAPI, Hooks e Redux"},
  {id:"sass", name: "Sass", icon: <DiSass/>, desc: "Habilidades em Sass para estilização de páginas web"},
  {id: "html", name: "HTML5", icon: <DiHtml5/>, desc: "Conhecimento em HTML5 para a criação de estrutura em páginas web"},
  {id:"css", name: "CSS3", icon: <DiCss3/>, desc: "Habilidades em CSS3 para estilização avançada de páginas web"},
  {id:"git", name: "Git", icon: <DiGit/>, desc: "Familiaridade com o sistema de controle para gerenciamento de código-fonte"}
]

function TechnologiesContainer() {
  return <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>{tech.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default TechnologiesContainer