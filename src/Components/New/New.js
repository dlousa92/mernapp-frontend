import React, { Component } from 'react'
import axios from 'axios'

class New extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      superPower: ''
    }
    this.createHero = this.createHero.bind(this)
    this.setName = this.setName.bind(this)
    this.setSuperPower = this.setSuperPower.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  render () {
    return (
      <div>
        <h1>Add a new hero to the battle below</h1>
        <form onSubmit={this.onClick}>
          <input type='text' placeholder='Name of Hero' onChange={this.setName} />
          <input type='text' placeholder='Superpowers?' onChange={this.setSuperPower} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
  createHero (e) {
    e.preventDefault()

    axios.post('http://localhost:8000/api/heroes', {
      name: this.state.name,
      superPower: this.state.superPower
    })
      .then((res) => {
        this.props.history.push('/')
      })
  }
  onClick (e) {
    this.createHero(e)
  }
  setName (e) {
    this.setState({
      name: e.target.value
    })
  }
  setSuperPower (e) {
    this.setState({
      superPower: e.target.value
    })
  }
}

export default New
