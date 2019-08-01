import Service from '../../service/resumeservice'
import React from 'react'
class Education extends React.Component {

    constructor() {
        super()
        this.state = {
            data: {}
        }
        this.getData = this.getData.bind(this)
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        Service.getEducations().then(resp => {
            this.setState({
                data: resp.data[0]
            })
        })
    }
    render() {

        const data = this.state.data
        console.log(data)
        return (<div id='resume'>
            <table id = 'Rtable'>
                <tbody>
                    <tr>
                        <td>
                            <h1 >
                                <span>
                                    Education:
                                </span>
                            </h1>
                        </td>
                        <td>
                            <h3 >
                                {data.School} 
                            </h3>
                        </td>


                    </tr>
                    <tr>
                        <td></td>
                        <td>{data.Bachelors} • {data.Major} • {data.Location}
                            <div style = {{textIndent:'40pt'}}>
                            Major GPA: {data.MGPA}
                            </div>
                           
                            <div style = {{textIndent:'40pt'}}>
                            Cumulative GPA: {data.GPA}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}

export default Education