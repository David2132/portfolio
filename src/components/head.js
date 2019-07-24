import React from 'react'
function Action(ext) {
  window.location.href='http://localhost:3000/' + ext
}
function Head() {
  if (window.location.href === 'http://localhost:3000/')
    return <div >
      <ul style={{ dispay: 'inline', textAlign: 'center', paddingBottom: '1.5vh' }}>
      <li style={{ color: 'orange' }} onClick={() => Action('')}>HOME</li>
        <li  onClick={() => Action('about')}>ABOUT</li>
        <li onClick={() => Action('resume')}>RESUME</li>
        <li onClick={() => Action('project')}>PROJECTS</li>
        <li onClick={() => Action('contact')}>CONTACT</li>
      </ul>

    </div>
  if (window.location.href === 'http://localhost:3000/about')
    return <div >

      <ul style={{ dispay: 'inline', textAlign: 'center', backgroundColor: '#838C95', paddingBottom: '1.5vh' }}>
        <li onClick={() => Action('')}>HOME</li>
        <li style={{ color: 'orange' }} onClick={() => Action('about')}>ABOUT</li>
        <li onClick={() => Action('resume')}>RESUME</li>
        <li onClick={() => Action('project')}>PROJECTS</li>
        <li onClick={() => Action('contact')}>CONTACT</li>
      </ul>


    </div>

  if (window.location.href === 'http://localhost:3000/resume')
    return <div >

      <ul style={{ dispay: 'inline', textAlign: 'center', backgroundColor: '#838C95', paddingBottom: '1.5vh' }}>
        <li onClick={() => Action('')}>HOME</li>
        <li  onClick={() => Action('about')}>ABOUT</li>
        <li style={{ color: 'orange' }} onClick={() => Action('resume')}>RESUME</li>
        <li onClick={() => Action('project')}>PROJECTS</li>
        <li onClick={() => Action('contact')}>CONTACT</li>
      </ul>

    </div>
if (window.location.href === 'http://localhost:3000/resume')
return <div >

<ul style ={{dispay:'inline', textAlign: 'center', backgroundColor:'#838C95',paddingBottom:'1.5vh' }}>
  <li onClick={()=>Action('')}>HOME</li>
  <li onClick={()=>Action('about')}>ABOUT</li>
  <li style = {{color:'orange'}} onClick={()=>Action('resume')}>RESUME</li>
  <li onClick={()=>Action('project')}>PROJECTS</li>
  <li onClick={()=>Action('contact')}>CONTACT</li>
</ul>


</div>
if (window.location.href === 'http://localhost:3000/project')
return <div >

<ul style ={{dispay:'inline', textAlign: 'center', backgroundColor:'#838C95',paddingBottom:'1.5vh' }}>
  <li onClick={()=>Action('')}>HOME</li>
  <li onClick={()=>Action('about')}>ABOUT</li>
  <li onClick={()=>Action('resume')}>RESUME</li>
  <li style = {{color:'orange'}} onClick={()=>Action('project')}>PROJECTS</li>
  <li onClick={()=>Action('contact')}>CONTACT</li>
</ul>
</div>
if (window.location.href === 'http://localhost:3000/contact')
return <div >

<ul style ={{dispay:'inline', textAlign: 'center', backgroundColor:'#838C95',paddingBottom:'1.5vh' }}>
  <li onClick={()=>Action('')}>HOME</li>
  <li  onClick={()=>Action('about')}>ABOUT</li>
  <li onClick={()=>Action('resume')}>RESUME</li>
  <li onClick={()=>Action('project')}>PROJECTS</li>
  <li style = {{color:'orange'}} onClick={()=>Action('contact')}>CONTACT</li>
</ul>


</div>




}

export default Head;