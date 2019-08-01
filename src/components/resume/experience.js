import Service from '../../service/resumeservice'
import React from 'react'

class Experience extends React.Component {

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
        Service.getExperiences().then(resp => {
            this.setState({
                data: resp.data.reverse()
            })
        })
    }
    render() {

        const data = this.state.data
        console.log(data)
        return (<div id='resume'>
            <table id='Rtable'>
                <tbody>
                    <tr>
                        <td valign='top' rowSpan='2' style={{ width: '20%', paddingTop: '0' }}>
                            <h1>
                                <span>
                                    Experience:
                                </span>
                            </h1>
                        </td>
                        {data.map(experience => (

                            <div style={{ paddingBottom: '20pt' }} key={experience._id}>
                                <td>
                                    <h3>
                                        {experience.Name}
                                    </h3>
                                    <br></br>
                                    {experience.Position} • {experience.Start} - {experience.End}
                                    <br></br>


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

export default Experience