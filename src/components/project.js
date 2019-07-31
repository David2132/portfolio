import React from 'react';
import Foot from './footer'
import Head from './head'
import Popup from './modal'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

// import Bird from '../images/bird.jpg'
import Service from '../service/resumeservice'
import Img from './img'

class project extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      modal: false,
      row: [],
      project: {
        _id: null,
        Date: null,
        Name: null,
        Description: null,
        Github: null,

      },
      Github:false

    }
    this.toggle = this.toggle.bind(this)
    this.change = this.change.bind(this)
  }
  toggle() {
    var modal = !this.state.modal
    this.setState({ modal })
  }
  change(project) {
    var modal = true
    var Github = project.Github !== ''
    this.setState({
      modal,
      project,
      Github
    })
  }
  componentDidMount() {
    Service.getProjects().then(resp => {
      const data = resp.data.reverse()
      let row = []
      for (let i = 0; i < data.length; i++) {
        row.push(data.splice(0, 4))
      }
      const project = row[0][0]
      this.setState({ row, project })
    }
    )

  }
  render() {

    return <div id=''>
      <Head />
      <div style={{ textAlign: 'center', paddingTop: '45px', marginBottom: '48px', font:'15px/24px "opensans-semibold", sans-serif' }}>
        CHECK OUT MY WORK
      </div>

      <table style={{ width: '700pt', margin: '5pt auto' }}>
        <tbody>
          {this.state.row.map(data => (
            <tr key={Math.random()}>
              {data.map(project => (
                <td className='container' key={project._id} style={{ height: '25%', width: '20%', marginLeft: '5pt', paddingTop: '40pt' }}>
                  <Img project = {project} change={this.change}/>
                  {/* <img src={Bird} alt='Project' style={{ height: '120pt', width: '120pt' }}></img>
                  <div className='overlay' onClick={() => {
                    this.change(project)
                  }}>
                    <b>{project.Name}</b>  <span style={{ color: 'black', fontSize: '9pt' }}>Created: {project.Date}</span>
                  </div> */}
                </td>
              ))}

            </tr>
          )
          )}

        </tbody>
      </table>


      <div style={{ textAlign: 'center', marginTop: '30pt' }}>
        <Foot />
      </div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.state.project.Name}</ModalHeader>
        <ModalBody>
        <Popup project={this.state.project}/>
        </ModalBody>
        <ModalFooter>
          {this.state.Github?   <a href={this.state.project.Github}>
          <Button color="primary">Github</Button>{' '}
          </a>: ''}
        
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  }
}

export default project;
