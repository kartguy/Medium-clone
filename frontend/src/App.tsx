import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/SignupPage'
import Login from './pages/loginPage'
import Blog from './pages/blog'

function App() {

  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/blogs' element={<Blog />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
