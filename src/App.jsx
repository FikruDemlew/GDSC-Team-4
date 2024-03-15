import Nav from "./component/Nav"
import { Routes,Route } from 'react-router-dom'
import Home from "./page/Home"
import Login from "./page/Login"
import Description from "./component/Description"
function App() {
  return (
    <>
     <div className="bg-[#EBECEF]">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/description/:id" element={<Description />} />
        
      </Routes>
     </div>
    </>
  )
}

export default App
