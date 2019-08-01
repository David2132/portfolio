import React from 'react'

class Popup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            project: {}
        }
    }
    componentDidMount(){
        this.setState({project:this.props.project})
    }
    render(){
        return (<div>
            Created: {this.state.project.Date}
            <br></br>
            {this.state.project.Description}
        </div>)
    }
}

export default Popup 