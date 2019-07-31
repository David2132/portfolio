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
                            I am one of five kids. Before pursuing my degree in Computer Science, I was pursuing a Nursing Degree. After two years of nursing and going to clinicals, I had a realization that I cannot imagine myself being a nurse for the rest of my working life. My roommate and cousin pursued their degrees in Computer Science, so I decided give coding a try.  I instantly fell in love with coding. The first year of me pursuing a Computer Science Degree, I was able to test out of two classes and obtain an internship at a prestigious company, IBM. 
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