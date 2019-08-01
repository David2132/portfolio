import Service from '../../service/resumeservice'
import React from 'react'
class Project extends React.Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
        this.getData = this.getData.bind(this)
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        Service.getProjects().then(resp => {
            this.setState({
                data: resp.data.reverse()
            })
        })
    }
    render() {

        const data = this.state.data
        return (<div id='resume'>
            <table id='Rtable'>
                <tbody>
                    <tr>
                        <td valign='top' rowSpan='2' style={{ width: '20%', paddingTop: '0' }}>
                            <h1>
                                <span>
                                    Projects:
                                </span>
                            </h1>
                        </td>
                        {data.map(project => (

                            <div style={{ paddingBottom: '20pt' }} key={project._id}>
                                <td>
                                    <h3>
                                        {project.Name}
                                    </h3>
                                    <br></br>
                                    {project.Date} • <a href={project.Github}>{project.Github}</a>
                                    <br></br>
                                    {project.Description}


                                </td>
                            </div>

                        ))}
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}

export default Project