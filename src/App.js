import './App.css'
import Navigation from './components/Navigation'
import LandingPage from './sections/LandingPage'
import Works from './sections/Works'
import About from './sections/About'
import Contact from './sections/Contact'
import { NavProvider } from './context/NavContext'
import SmoothScroller from './components/SmoothScroller'

function App() {

  return (
    <NavProvider>
      <Navigation />
      <SmoothScroller>
        <LandingPage />
        <Works />
        <About />
        <Contact />
      </SmoothScroller>
    </NavProvider>
  )
}

export default App
