import React from 'react'
import David from '../images/David.jpg'
import Head from './head'
import Foot from './footer'

class About extends React.Component {
    render() {
        return (<div id='about' style={{ backgroundColor: '#2B2B2B', height: '100vh', paddingBottom: '0' }}>

            <Head currentPath={this.props.location.pathname} />
           

                            <img src={David} alt='David' style={{ borderRadius: '50%', width: '10%', marginTop:'20pt', marginLeft:'5%', float:'left' }}>
                            </img>
                            <h1 id='emp' style={{    marginLeft: '22%'}} >
                                About Me:
                            </h1>
                            <p style={{ color: 'gray', marginLeft:'22%', marginRight:'10%' }}>
                                I was born in New Orleans, Louisiana, but was raised in Bogaulsa, Louisiana. Before deciding to pursue a degree in computer science, I was pursuing an education in nursing.
                                 However, after two years of nursing school and doing practical work at the hospital, I realized being a nurse was not for me. With some inspiration from others, I tried coding
                                 to see if it was a right match for me. I instantly fell in love with coding. With my new love for coding, I was able to get an internship at IBM, work part time at a start up company, graduate in computer science, 
                                 and get a full time position working at the NASA Johnson Space Center within two years of changing my major. I enjoy exercising,
                                 cooking, playing video games, and eating. I am a very adventurous person and have been snowboarding, scuba diving, deep sea fishing, and many more!
                            </p>
                 
            <footer>
                <div style={{ textAlign: 'center', marginBotttom: '30pt' }}>
                    <Foot />
                </div>
            </footer>
        </div>)
    }
}
export default About