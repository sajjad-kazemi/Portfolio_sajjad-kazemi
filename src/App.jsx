import './App.css'

import Navbar from './components/Navbar/Navbar'
import Samples from './components/Samples/Samples'
import resume from './resume'

// import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <>
        <Navbar/>
      <section className="container-fluid">
        <Samples resume={resume}/>
      </section>
    </>
  )
}

export default App
