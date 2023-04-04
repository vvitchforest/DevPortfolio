import './App.css'
import Navigation from './components/Navigation'
import LandingPage from './sections/LandingPage'
import Works from './sections/Works'
import About from './sections/About'
import Contact from './sections/Contact'
import { NavProvider } from './context/NavContext'

function App() {

  return (
    <NavProvider>
      <Navigation />
      <LandingPage />
      <Works />
      <About />
      <Contact />
    </NavProvider>
  )
}

export default App
