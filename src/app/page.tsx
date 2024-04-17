import React from 'react'
import Navbar from './components/Navbar'
import QueryInputCards from './components/QueryInputCards'
// import { toast } from 'react-toastify' // successfully executed query, redirect to database page

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <Navbar />
      <QueryInputCards />

      
    </>
  )
}

export default HomePage