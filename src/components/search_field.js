import React from 'react'
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsMic, BsFillCameraFill } from 'react-icons/bs'
import DisplayQuery from './display_query';

import logo from '../images/googlelogo.png'



const SearchComponent = () => {
  const [query, setQuery] = useState('')
  const [displayQuery, setDisplayQuery] = useState('')

  function handleSubmit(e) {
      setDisplayQuery(query);
  }

  function handleEnterKey(e) {
    if(e.key === 'Enter' ) {
      setDisplayQuery(query);
    }
  }

  return (
    <div className='google_content'>
        <img src={logo}/>

        <div className='google_search'>
            <AiOutlineSearch />
            <input type='text' value={query}  onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => handleEnterKey(event)} />
            <BsMic />
            <BsFillCameraFill />
        </div>
        <div id='searchQuery'>{displayQuery}</div>
        <div className='google_button'>
            <button onClick={(event) => handleSubmit(event)}>Google Search</button>          
            <button>Im Feeling Lucky</button>
        </div>
        <div>
            Google offered in: <a href='#'>Hausa</a>  <a href='#'>Igbo</a> <a href='#'>Ede Yoruba</a> <a href='#'>Nigeria Pidgin</a>
        </div>
    </div>
  )
}

export default SearchComponent