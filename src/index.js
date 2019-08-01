import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import home from './components/home'
import about from './components/about'
import resume from './components/resume'
import contact from './components/contact'
import project from './components/project'


const routing = (
    <Router>
        <div>
           
            <Route exact path="/" component={home}/>
            <Route path='/about' component={about}/>
            <Route path='/resume' component={resume}/>
            <Route path='/project' component={project}/>
            <Route path='/contact' component={contact}/>

        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
