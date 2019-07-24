import React from 'react'
import David from '../images/David.jpg'
import Head from './head'
import Foot from './footer'

class About extends React.Component {
    render() {
        return <div id ='about' style={{ backgroundColor: '#2B2B2B', height: '100vh', paddingBottom:'0' }}>

            <Head />
            <table>
                <tbody>
                    <tr valign="top">

                        <td style={{ paddingLeft: '1.5vh', width: '60vh' }}>
                            <img src={David} alt='David' style={{ borderRadius: '50%', width: '40vh' }}>
                            </img>
                        </td>
                        <td style={{ paddingRight: '20vh' }}>
                            <h1 id='emp' >
                                About Me:
                            </h1>
                            <p style={{ color: 'gray' }}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <footer>
            <div style={{ textAlign: 'center'}}>
                <Foot />
            </div>
            </footer>
        </div>
    }
}
export default About