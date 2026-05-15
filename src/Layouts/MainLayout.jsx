import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from '../components/Navigationbar'
import Footer from '../components/Footer'
export default function MainLayout() {
  return (
    <div>
     
      <Navigationbar/>
      <div>
         <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
