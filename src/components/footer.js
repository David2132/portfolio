import React from 'react'
import github from '../images/github-logo.png'
import linkedin from '../images/linkedin.png'
function Foot() {

    return <footer valign='center'>
        <ul>
            <li>
                <a href='https://github.com/David2132'>
                    <img id='down' src={github} alt='Github'></img>
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/david-duong-2a4042167'>
                    <img id='down' src={linkedin} alt='Linkedin'></img>
                </a>
            </li>
        </ul>
        <br></br>
        <div style={{ color: 'gray' }}>
            Portfolio @ 2019. Design and created by David D.
    </div>
    </footer>
}
export default Foot