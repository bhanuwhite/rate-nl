import React from 'react'
import Footer from '../pages/footer/Footer'
import Cards from './cards/Cards'
// import CardLastPage from './cardLastPage/CardLastPage'

function MainPage() {
  return (
    <div>
       <div className='main_body bg-[#F6FCFE]'>
        <div className='mx-[50px] section'>
         <Cards/>
         {/* <CardLastPage /> */}
        </div>
        
      </div>
    </div>
  )
}

export default MainPage
