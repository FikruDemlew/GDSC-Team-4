
import { Routes,Route } from 'react-router-dom'
import Home from "./page/Home"
import Login from "./page/Login"
import Nav from './component/Nav'
import Footer from './component/Footer'
import SearchResult from './component/SearchResult'

function App() {

  return (
    <>
     <div className="bg-[#EBECEF]">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/:search' element={<SearchResult />}/>
      </Routes>
     </div>
    </>
  )
}

export default App
