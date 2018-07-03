import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'

class HeroCard extends Component {
  constructor () {
    super()
    this.state = {
      heroes: []
    }
  }

  componentDidMount () {
    console.log('here')
    axios.get('http://localhost:8000/api/heroes')
      .then((res) => {
        // console.log(res)
        this.setState({
          heroes: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    console.log(this.state)
    const heroes = this.state.heroes.map((hero, i) => {
      return (
        <div key={i}>
          <p><Link to={`/heroes/${hero._id}`}>{hero.name}</Link></p>
          <p>{hero.superPower}</p>
          <Route path={`/heroes/${hero._id}`}
            render={() => {
              return (
                <input type='submit' value='Submit' />
              )
            }}
          />
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
