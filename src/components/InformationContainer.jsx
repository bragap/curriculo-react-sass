import { AiFillPhone, AiFillEnvironment } from 'react-icons/ai'

import { MdOutlineMailOutline } from 'react-icons/md'

import '../styles/components/informationcontainer.scss'

function InformationContainer() {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(35)99948-2180</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Belo Horizonte/MG</p>
            </div>
        </div>
        <div className="info-card">
            <MdOutlineMailOutline id="email-icon" />
            <div className="email-section">
                <h3>E-mail</h3>
                <p>pcastro@sga.pucminas.br</p>
            </div>
        </div>
    </section>
}

export default InformationContainer