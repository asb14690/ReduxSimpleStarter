import React, { Component } from 'react'
import 'tabler-react/dist/Tabler.css'
import { Site } from 'tabler-react'

class Header extends Component {
  render () {
    return (
      <Site>
        <Site.Header>
          <Site.Logo src={this.props.logo} href='/' />
        </Site.Header>
      </Site>
    )
  }
}

export default Header
