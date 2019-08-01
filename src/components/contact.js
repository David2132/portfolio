import React from 'react'
import Head from './head'
import Email from '../images/email.png'
import Service from '../service/resumeservice'
import { Button } from 'reactstrap'
import Foot from './footer'

class About extends React.Component {
    constructor() {
        super()
        this.state = {
            First_Name: String,
            Last_Name: String,
            Email: String,
            Subject: String,
            Text: String
        }
        this.handleChange = this.handleChange.bind(this)
        this.Action = this.Action.bind(this)
    }
    handleChange(event) {
        let { name, value } = event.target
        this.setState({
            ...this.state,
            [name]: value

        })
    }
    Action() {
        alert("Message was sent!")
        Service.postMessage(this.state)
        this.setState({
            First_Name:'',
            Last_Name:'',
            Email:'',
            Subject:'',
            Text:''
        })
    }
    render() {
        const data = this.state
        return (<div id='contact' style={{ backgroundColor: '#2B2B2B', backgroundSize: 'cover' }}>

            <Head currentPath={this.props.location.pathname} />

            <table id="tabletxt" style={{ marginTop: '96px', marginLeft: '10%', width: '80%' }}>
                <tbody>
                    <tr valign="top">
                        <td style={{ width: '20%' }}>
                            <img src={Email} alt='David' style={{ width: '10vh' }}>
                            </img>
                        </td>
                        <td style={{ paddingRight: '', paddingLeft: '10%' }}>

                            <p style={{ color: 'gray' }}>
                                If you are interested in contacting me please fill out the form below and I will try to get to your message as soon as possible.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                First Name:
                            </label>
                        </td>
                        <td style={{ paddingLeft: '10%' }}>
                            <input type='text' onChange={this.handleChange} value={data.First_Name} name='First_Name' />
                        </td>

                    </tr>
                    <tr valign="center">
                        <td>
                            <label >
                                Last Name:
                            </label>
                        </td>
                        <td style={{ paddingLeft: '10%' }}>
                            <input onChange={this.handleChange} value={data.Last_Name} name='Last_Name' type='text' />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label >
                                Email:
                            </label>
                        </td>
                        <td style={{ paddingLeft: '10%' }}>
                            <input onChange={this.handleChange} value={data.Email} name='Email' type='text' />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>
                                Affilated Company:
                            </label>
                        </td>
                        <td style={{ paddingLeft: '10%' }}>
                            <input onChange={this.handleChange} value={data.Subject} name='Subject' type='text' />
                        </td>

                    </tr>
                    <tr>
                        <td >
                            <label>
                                Message*:
                            </label>
                        </td>
                        <td style={{ paddingLeft: '10%' }}>
                            <textarea onChange={this.handleChange} value={data.Text} name='Text' id='textarea'>
                            </textarea>
                        </td>

                    </tr>

                </tbody>
            </table>
            <div style={{textAlign:'center'}}>
            <Button style={{  marginBottom:'20%' }} onClick={() => this.Action()}>Submit</Button>
            </div>
            <div style={{ textAlign: 'center', marginBotttom: '30pt' }}>
                <Foot />
            </div>
        </div>)
    }
}
export default About