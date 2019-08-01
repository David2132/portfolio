import React from 'react'
import background from '../images/header-background.jpg'

import Service from '../service/resumeservice'
import Foot from './footer'

import Head from './head'
class home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true
        }
        this.getSkill = this.getSkill.bind(this)
    }
    componentDidMount() {
        this.getSkill()

    }
    getSkill() {
        Service.getSkills().then(data => {
            this.setState({
                data: data.data,
                isLoading: false
            }
            )
        })
    }
    render() {
        if (this.state.isLoading)
            {return (<div>
                <h1 valign='center' id='home' style={{ textAlign: 'center', backgroundImage: `url(${background}`, backgroundSize: 'cover', color: 'white' }}>
                    Please wait. Backend is on Heroku and takes time to run. Thank you!
            </h1>
            </div>)}


        return (<div id="home" style={{ backgroundImage: `url(${background})`, textAlign: 'center', backgroundSize: 'cover' }}>

            <Head currentPath={this.props.location.pathname} />
            <div style={{ marginTop: '10%' }}>
                <span style={{ padding: '70px 0' }}>
                    <b style={{ font: "80px/1.1em'opensans-bold', sans-serif", color: 'white' }}>
                        I'm David Duong.
               </b>
                    <p style={{ fontSize: "50px/1.9em 'librebaskerville-regular', serif", color: 'grey' }}>
                        I am a <span id='emp'>soon</span> to be graduating student <br></br>
                        from  <span id='emp'>University of Lousiana at Lafayette </span>with
                    <br></br> experience in <span id='emp'>numerous coding languages</span>!
                    <br></br>
                        Let's <span id='emp'>checkout my site </span>
                        and learn more <span id='emp'>about me</span>!
               </p>
                </span>

            </div>
            <Foot />
        </div>)
    }
}

export default home