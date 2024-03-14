
import { Routes,Route } from 'react-router-dom'
import Home from "./page/Home"
import Login from "./page/Login"
import Nav from './component/Nav'
import Footer from './component/Footer'

function App() {
  return (
    <>
     <div className="bg-[#EBECEF]">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        
      </Routes>
      <Footer/>
     </div>
    </>
  )
}

export default App
