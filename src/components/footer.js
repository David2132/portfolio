import React from 'react'
import github from '../images/github-logo.png'
import linkedin from '../images/linkedin.png'
function Foot() {
    if (window.location.href === 'http://localhost:3000/')
    return <footer valign = 'center'>
            <ul>
                <li>
                    <img id='down' src={github} alt='Github'></img>
                </li>
                <li>
                    <img id='down' src={linkedin} alt='Linkedin'></img>
                </li>
            </ul>
            <br></br>
            <div style={{color:'gray'}}>
            Portfolio @ 2019. Design and created by David D.
            </div>
        </footer>
    return <footer valign = 'center'>
    <ul>
        <li>
            <img id='down' src={github} alt='Github'></img>
        </li>
        <li>
            <img id='down' src={linkedin} alt='Linkedin'></img>
        </li>
    </ul>
    <br></br>
    <div style={{color:'gray'}}>
    Portfolio @ 2019. Design and created by David D.
    </div>
</footer>
}
export default Foot