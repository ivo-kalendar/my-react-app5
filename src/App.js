import './Root.css'
import './App.css'
import './List.css'
import React from 'react'
import { Topics } from './Topics'
import { Info } from './Info'
import { Switch, Route, Link } from 'react-router-dom'


export const App = () => (
    <div className="App">
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
                <li><Link to='/info'>Info</Link></li>
            </ul>
        </nav>

        <br />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
            <Route path='/info' component={Info} />
        </Switch>
        <br />
    </div>
)


const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>