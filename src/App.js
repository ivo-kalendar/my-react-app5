import React, { Component } from 'react'
import './App.css'
import { Topics } from './Topics'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>
const Info = () => <div><h2>Info</h2></div>


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link className='linkStyle' to='/'>Home</Link></li>
            <li><Link className='linkStyle' to='/about'>About</Link></li>
            <li><Link className='linkStyle' to='/topics'>Topics</Link></li>
            <li><Link className='linkStyle' to='/info'>Info</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
          <Route path='/info' component={Info} />
        </div>
      </Router>
    )
  }
}

export default App