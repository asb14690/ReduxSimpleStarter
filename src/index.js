import _ from 'lodash'
import React, { Component } from 'react' // Import React modules in ES6
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-v3-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'
import Header from './components/Header/index'

import ImagePath from './components/Header/HeaderImagePath.react'

// these should be move to the configuration file
const API_KEY = 'API Key'
// Create a component with JSX that produce HTML

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('Nodejs')
  }

  videoSearch (term) {
    YTSearch(API_KEY, { q: term, type: 'video', maxResults: 10 },
      (error, data) => {
        if (error) {
          this.setState({ videos: [] })
        }
        this.setState({
          videos: data.items,
          selectedVideo: data.items[0]
        })
      })
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <Header logo={ImagePath('logo.png')} />
        <SearchBar onSearchTermChange={videoSearch} />
        <div className='row'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos} />
        </div>
      </div>
    )
  }
}

// Take genrated HTML and put on the page(DOM)

ReactDOM.render(<App />, document.getElementById('app'))
