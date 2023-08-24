import './App.css'
import Navbar from './components/header/Navbar'
import Home from './pages/1.home/Home'
import Services from './pages/2.services/Services'
import Portfolio from './pages/3.portfolio/Portfolio'
import Contact from './pages/4.Contact/Contact'

function App() {


  return (
    <div >
      <Navbar/>
      <Home/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
