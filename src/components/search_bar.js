import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {term: ''}
  }
  // Every class based component must have a render method

  render () {
    return (
      <div className='search-bar col-sm-12'>
        <input
          value={this.state.term}
          placeholder='Search'
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }

  onInputChange (term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
