import './App.css'

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

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
            {/* <Route path="About"/>
            <Route path="Contact"/> */}
            <Route path="*" element={<ErNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
