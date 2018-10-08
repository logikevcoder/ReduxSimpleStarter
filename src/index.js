import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCyWzW8MsUhFD6aRAcM2nDC2ZDW9pND6Jg';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));