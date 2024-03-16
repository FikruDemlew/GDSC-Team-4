import Nav from "./component/Nav"
import { Routes,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./page/Home"
import Login from "./page/Login"
import Signup from "./page/Signup"
import { MoviesDetails } from "./page/MoviesDetails"
import { AuthProvider } from "./context/authContext"
function App() {
  return (
    <>
     <div className="bg-[#EBECEF]">
      <AuthProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/movies/:id' element={<MoviesDetails/>} />

        
      </Routes>
        </AuthProvider> 
     
     </div>
    </>
  )
}

export default App
