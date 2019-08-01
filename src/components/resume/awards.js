import Service from '../../service/resumeservice'
import React from 'react'
class Award extends React.Component {

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
        Service.getAwards().then(resp => {

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
                                    Awards:
                                </span>
                            </h1>
                        </td>
                        <td>
                           <table style = {{width:'100%'}}>
                               {data.map(resp => (
                                   <tr id ={resp._id}>
                                       <td style = {{width:'50%'}}>
                                           {resp.Title}
                                       </td>
                                       <td>
                                           {resp.Date}
                                        </td>
                                    </tr>
                               ))}
                            </table>
                        </td>
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

export default Award