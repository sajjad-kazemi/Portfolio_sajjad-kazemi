import './App.css'

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ErNotFound from './components/ErNotFound/ErNotFound'
import Navbar from './components/Navbar/Navbar'
import Samples from './components/Samples/Samples'
import resume from './resume'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Samples resume={resume}/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="*" element={<ErNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
