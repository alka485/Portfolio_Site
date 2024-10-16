import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';
import Header from "./component/Header"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Footer from './component/Footer';
import Projects from './component/Projects';


function App() {
 
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      {/* <Home/> */}
      {/* <About/>
      <Contact/> */}
      <Footer/>
        
    </Router>
  )
}

export default App
