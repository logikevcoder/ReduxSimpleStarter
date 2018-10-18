import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCyWzW8MsUhFD6aRAcM2nDC2ZDW9pND6Jg';



class App extends Component {

  // always gets called with props 
  constructor(props) {
    super(props);

    this.state = { videos: [] }; // contains a list of objects

    YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
      this.setState({ videos }) // this.setState({ videos: videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.querySelector('.container'));