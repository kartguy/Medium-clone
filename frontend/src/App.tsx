import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/SignupPage'
import Login from './pages/loginPage'
import Blogs from './pages/blogs'
import { Blog } from './pages/blog'
import { Publish } from './pages/publish'

function App() {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/publish' element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
