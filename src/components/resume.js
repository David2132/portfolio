import React from 'react'
import Head from './head'
import Education from './resume/education'
import Project from './resume/projects'
import Experience from './resume/experience'
import Skill from './resume/skills'
import Award from './resume/awards'
import Foot from './footer'



class Resume extends React.Component {
    render() {
        return <div style={{ height: '100vh' }}>
                
                <Head/>
                <Education/>
                <Project/>
                <Experience/>
                <Skill/>
                <Award/>
                <div style= {{textAlign:'center', marginBotttom:'30pt'}}>
                <Foot/>
                </div>
                
        </div>
    }
}
export default Resume