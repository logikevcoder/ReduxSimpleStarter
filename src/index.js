import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCyWzW8MsUhFD6aRAcM2nDC2ZDW9pND6Jg';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }) // this.setState({ videos: videos })
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.querySelector('.container'));