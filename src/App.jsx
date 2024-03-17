import Nav from "./component/Nav"
import { Footer } from "./component/Footer"
import { Routes,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./page/Home"
import Login from "./page/Login"
import Signup from "./page/Signup"
import { About } from "./page/About"
import Favorite from "./page/Favorites"
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
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/movies/:id' element={<MoviesDetails/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>

        </AuthProvider> 
     
     </div>
    </>
  )
}

export default App
