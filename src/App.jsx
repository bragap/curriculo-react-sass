//components
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

//styles scss
import './styles/components/app.scss'


function App() {

  return (
    <div id="portfolio">
      <h1>Pedro Braga</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
