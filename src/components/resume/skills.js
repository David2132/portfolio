import Service from '../../service/resumeservice'
import React from 'react'
class Skills extends React.Component {

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
        Service.getSkills().then(resp => {
            const data = resp.data
            let group = []
            for (let i = 0; i < data.length; i++) {
                group.push(data.splice(0, 4))
            }

            this.setState({
                data: group
            })
        })
    }
    render() {

        const data = this.state.data
        return <div id='resume'>
            <table id='Rtable'>
                <tbody>
                    <tr>
                        <td valign='top' rowSpan='2' style={{ width: '20%', paddingTop: '0' }}>
                            <h1>
                                <span>
                                    Skills:
                                </span>
                            </h1>
                        </td>
                        <table style={{width:'100%'}}>
                            {data.map(skills => (

                                
                                    <tr key = {Math.random()}>
                                        {skills.map(skill => (
                                            <td style={{width:'25%', paddingBottom:'10pt'}} key ={skill._id}>
                                               <img src={skill.Link} alt=''style={{width:'15%',height:'15%'} }></img> {skill.Name}
                                            </td>
                                        ))}
                                    </tr>
                               
                            ))}
                        </table>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default Skills