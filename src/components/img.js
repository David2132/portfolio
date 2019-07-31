import React from 'react'
import Bird from '../images/bird.jpg'
import dog from '../images/doggies.jpg'
import dog2 from '../images/doggies2.jpg'
import coffee from '../images/coffee.jpg'
import pom from '../images/doggie.jpg'


import Ang from '../images/AngularCoding/addValidator.PNG'
import Rea from '../images/ReactCoding/Capture1.PNG'
import Rec from '../images/Recruitment/1.PNG'
import Res from '../images/ResumePic/Capture.PNG'
import Wea from '../images/weather/Capture.PNG'

class Img extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: {_id: null,
                Date: null,
                Name: null,
                Description: null,
                Github: null,
                Link:null
            }
        }
        this.change = this.change.bind(this)
    }
    change(project){
        this.props.change(project)
    }
    componentDidMount() {
        this.setState({ project: this.props.project })
    }
    render() {
        var image = Bird
        var count = Math.random()
        if (count < 0.2)
            image = dog
        if (count >0.4)
            image = pom
        if (count > 0.6)
            image = coffee
        if (count >0.8)
            image = dog2
        if (this.state.project.Name === 'Employee Site 2')
            image = Rea 
        if (this.state.project.Name === 'Employee Site')
            image = Ang
        if (this.state.project.Name ==='Recruitment App')
            image = Rec
            if (this.state.project.Name === 'Duong Weather')
            image = Wea
        if (this.state.project.Name ==='Resume Site')
            image = Res

        return <div>
           <img src={image} alt={this.state.project.Name} style={{ height: '120pt', width: '120pt',border:'1px solid #021a40' }}></img>
                  <div className='overlay' onClick={() => {
                    this.change(this.state.project)
                  }}>
                    <b>{this.state.project.Name}</b>  <span style={{ color: 'black', fontSize: '9pt' }}>Created: {this.state.project.Date}</span>
                  </div>
        </div>
    }
}

export default Img 