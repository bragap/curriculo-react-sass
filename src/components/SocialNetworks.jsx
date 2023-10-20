import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import '../styles/components/socialnetworks.scss';

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin /> ,link:"https://www.linkedin.com/in/pedro-henrique-848416244/"},
  { name: "github", icon: <FaGithub /> , link: "https://github.com/bragap"},
  { name: "instagram", icon: <FaInstagram /> , link: "https://www.instagram.com/pedrobraga.b/"}
];

function SocialNetworks() {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
}

export default SocialNetworks;
