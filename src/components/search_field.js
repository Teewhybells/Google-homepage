import React from 'react'
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsMic, BsFillCameraFill } from 'react-icons/bs'
import DisplayQuery from './display_query';

import logo from '../images/googlelogo.png'



const SearchComponent = () => {
  const [query, setQuery] = useState('')

  function submit() {
    const searchQuery = document.getElementById('searchQuery')
    searchQuery.innerHTML = query 
    setQuery('') 
  }

  return (
    <div className='google_content'>
        <img src={logo}/>

        <div className='google_search'>
            <AiOutlineSearch />
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
            <BsMic />
            <BsFillCameraFill />
        </div>
        <div id='searchQuery'></div>
        <div className='google_button'>
            <button onClick={(e) => submit()}>Google Search</button>          
            <button>Im Feeling Lucky</button>
        </div>
        <div>
            Google offered in: <a href='#'>Hausa</a>  <a href='#'>Igbo</a> <a href='#'>Ede Yoruba</a> <a href='#'>Nigeria Pidgin</a>
        </div>
    </div>
  )
}

export default SearchComponent