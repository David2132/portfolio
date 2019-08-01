import React from 'react'
import github from '../images/github-logo.png'
import linkedin from '../images/linkedin.png'
function Foot() {

    return (<footer valign='center'>

        <a href='https://github.com/David2132'id='icon' >
            <img id='down' src={github} alt='Github'></img>
        </a>

        <a href='https://www.linkedin.com/in/david-duong-2a4042167' id='icon'>
            <img id='down' src={linkedin} alt='Linkedin'></img>
        </a>

        <br></br>
        <div style={{ color: 'gray', paddingBottom: '10pt' }}>
            Portfolio @ 2019. Design and created by David D.
    </div>
    </footer>)
}
export default Foot