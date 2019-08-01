import React from 'react'
import { Link } from 'react-router-dom'

function Head({ currentPath }) {
  console.log('CURRENT PATH', currentPath)

  return (<div style={{textAlign:'center', paddingTop:'5pt', paddingBottom:'30px'}}>

    <Link to="/" id='Link'>HOME</Link>
    <Link to="/about" id='Link'>ABOUT</Link>
    <Link to='/resume' id='Link'>RESUME</Link>
    <Link to='/project' id='Link'>PROJECT</Link>
    <Link to='/contact' id='Link'>CONTACT</Link>


  </div>)
}

export default Head;