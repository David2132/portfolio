import React from 'react';
import Foot from './footer'
import Head from './head'
import Bird from '../images/bird.jpg'
import Service from '../service/resumeservice'


class project extends React.Component {
  constructor(){
    super()
    this.state = {
      loading:true,
      data: {
        row:[],
        col:[]
      }
    }
  }
  componentDidMount(){
    Service.getProjects().then()

  }
  render() {
    return <div id = ''>
      <Head />
      <div style={{ textAlign: 'center', paddingTop:'90px', marginBottom:'48px' }}>
        CHECK OUT MY WORK
      </div>

      <table style ={{width:'60%', margin:'5pt auto'}}>
        <tbody>
          <tr>

            <td className='container' style={{ height: '25%', width: '20%', marginLeft:'5pt'}}>
              <img src={Bird} alt='Project' style={{ height: '120pt', width: '120pt'}}></img>
              <div className='overlay'>
                David
              </div>
            </td>
            <td className='container' style={{ height: '25%', width: '20%', marginLeft:'5pt'}} >
              <img src={Bird} alt='Project' style={{ height: '120pt', width: '120pt' }}></img>
              <div className='overlay'>
                David
              </div>
            </td>
            <td className='container'  style={{ height: '25%', width: '20%', marginLeft:'5pt'}}>
              <img src={Bird} alt='Project' style={{ height: '120pt', width: '120pt' }}></img>
              <div className='overlay'>
                <b>Project: </b>
              </div>
            </td>

            <td className='container'  style={{ height: '25%', width: '20%', marginLeft:'5pt'}}>
              <img id='img' src={Bird} alt='Project' style={{ height: '120pt', width: '120pt' }}></img>
              <div className='overlay'>
                David
              </div>
            </td>
            
          </tr>
        </tbody>
      </table>

      <Foot />
    </div>
  }
}

export default project;
