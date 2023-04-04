import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsMic, BsFillCameraFill } from 'react-icons/bs'

import logo from '../images/googlelogo.png'

const SearchComponent = () => {
  return (
    <div className='google_content'>
        <img src={logo}/>

        <div className='google_search'>
            <AiOutlineSearch />
            <input type='text' />
            <BsMic />
            <BsFillCameraFill />
        </div>
        <div>
            <button>Google Search</button>
          
            <button>Im Feeling Lucky</button>
        </div>
        <div>
            Google offered in: <a href='#'>Hausa</a>  <a href='#'>Igbo</a> <a href='#'>Ede Yoruba</a> <a href='#'>Nigeria Pidgin</a>
        </div>
    </div>
  )
}

export default SearchComponent