import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='container mx-auto'>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Root
