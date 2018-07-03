import React, { Component } from 'react'
import axios from 'axios'

class HeroCard extends Component {
  constructor () {
    super()
    this.state = {
      heroes: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:8000/api/heroes')
      .then((res) => {
        console.log(res)
        this.setState({
          heroes: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render () {
    const heroes = this.state.heroes.map((hero, i) => {
      return (
        <div key={i}>
          <p>{hero.name}</p>
          <p>{hero.superPower}</p>
        </div>
      )
    })

    return (
      <div>
        { heroes }
      </div>
    )
  }
}

export default HeroCard
