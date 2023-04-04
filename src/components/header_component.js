import React from 'react'
import { RiDashboardFill } from "react-icons/ri";

const HeaderComponent = () => {
  return (
    <div className='google-header'> 
        <a href='#'>Gmail</a>  
        <a href='#'>images</a>  
        <a><RiDashboardFill /></a> 
        <a><span className='avatar'>T</span></a>
        </div>
  )
}

export default HeaderComponent
  