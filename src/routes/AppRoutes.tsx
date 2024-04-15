import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../pages/header/Header'
import MainPage from '../components/MainPage'
import ChatInput from '../components/cards/chatInput/ChatInput'
import Footer from '../pages/footer/Footer'

function AppRoutes  ()  {
  return (
    <div className='App'>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path="/chatInput" element={<ChatInput/>}/>

            </Routes>
            <Footer/>
        </Router>
      
    </div>
  )
}

export default AppRoutes
