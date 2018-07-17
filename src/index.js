import React from 'react' // Import React modules in ES6
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAmIP8fwTlIvIEuMO_Jm11es4i3vgVCgVg'

// Create a component with JSX that produce HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take genrated HTML and put on the page(DOM)

ReactDOM.render(<App />, document.querySelector('.container'))
