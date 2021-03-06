import React, { Component } from 'react'
import {
  Link,
  Route
} from 'react-router-dom'
import Home from '../Home/Home'
import New from '../New/New'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>The Ultimate Showdown of Ultimate Destiny</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/new'>Create a Hero</Link>
          </nav>
        </header>
        <main>
          <Route path='/new'
            render={(routerParams) =>
              <New
                {...routerParams}
                {...this.state}
              />}
          />
          <Route path='/'
            component={Home}
            exact
          />
        </main>
      </div>
    )
  }
}

export default App
