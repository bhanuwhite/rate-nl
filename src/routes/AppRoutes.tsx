import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../pages/header/Header'
import MainPage from '../components/MainPage'
import ChatInput from '../components/cards/chatInput/ChatInput'
import Footer from '../pages/footer/Footer'
import CardLastPage from '../components/cardLastPage/CardLastPage'
// import MultipleChoiceQues from '../components/multipleChoice/MultipleChoiceQues'

function AppRoutes  ()  {
  return (
    <div className='App'>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path="/SurveyStarted" element={<ChatInput/>}/>
                <Route path="/SurveyCompleted" element={<CardLastPage/>}/>

            </Routes>
            <Footer/>
        </Router>
      
    </div>
  )
}

export default AppRoutes
