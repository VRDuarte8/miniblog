import './App.css'

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthProvider } from './context/AuthContext'
import { useAuthentication } from './hooks/UseAuthentication'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import Search from './pages/Seach/Search'
import Post from './pages/Post/Post'
import EditPost from './pages/EditPost/EditPost'

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    })
  })

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className='App'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar/>
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/posts/:id' element={<Post/>}/>
                <Route path='/login' element={user === null ? <Login/> : <Navigate to="/"/>}/>
                <Route path='/register' element={user === null ? <Register/> : <Navigate to="/"/>}/>
                <Route path="/posts/edit/:id" element={user ? <EditPost /> : <Navigate to="/login" />}/>
                <Route path='/posts/create' element={user !== null ? <CreatePost/> : <Navigate to="/login"/>}/>
                <Route path='/dashboard' element={user !== null ? <Dashboard/> : <Navigate to="/login"/>}/>
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
