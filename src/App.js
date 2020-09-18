import React, { Component } from 'react'
import './App.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>
const Topics = () => <div><h2>Topics</h2></div>
const Info = () => <div><h2>Info</h2></div>
const LinkStyle = { textDecoration: "none" }


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link style={LinkStyle} to='/'>Home</Link></li>
            <li><Link style={LinkStyle} to='/about'>About</Link></li>
            <li><Link style={LinkStyle} to='/topics'>Topics</Link></li>
            <li><Link style={LinkStyle} to='/info'>Info</Link></li>
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