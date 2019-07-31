import React from 'react'
import David from '../images/David.jpg'
import Head from './head'
import Foot from './footer'

class About extends React.Component {
    render() {
        return <div id='about' style={{ backgroundColor: '#2B2B2B', height: '100vh', paddingBottom: '0' }}>

            <Head />
            <table>
                <tbody>
                    <tr valign="top">

                        <td style={{ paddingLeft: '1.5vh', width: '60vh' }}>
                            <img src={David} alt='David' style={{ borderRadius: '50%', width: '40vh' }}>
                            </img>
                        </td>
                        <td style={{ paddingRight: '20vh' }}>
                            <h1 id='emp' >
                                About Me:
                            </h1>
                            <p style={{ color: 'gray' }}>
                            I was born in New Orleans, Louisiana, but was raised in Bogaulsa, Louisiana. Before deciding to pursue a degree in computer science, I was pursuing an education in nursing.
                             However, after two years of nursing school and being able to be a part of clincals, I realized being a nurse was not for me. With some inspiration from others, I tried coding 
                             to see if it was a right match for me. I instantly fell in love with coding. With my new love for coding, I was able to study on my own and ace out of two classes (Something I 
                             never imagined myself ever being able to do) and was able to obtain an internaship at a prestigious company, IBM, during my first year of computer science. I enjoy exercising, 
                             cooking, playing video games, and eating. I am a very adventurous person and have been snowboarding, scubadiving, deep sea fishing, and many more!
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <footer>
                <div style={{ textAlign: 'center', marginBotttom: '30pt' }}>
                    <Foot />
                </div>
            </footer>
        </div>
    }
}
export default About