import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCyWzW8MsUhFD6aRAcM2nDC2ZDW9pND6Jg';

class App extends Component {
  constructor(props) { // always gets called with props  
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    }; // contains a list of objects

    this.videoSearch('cats');
  }

  videoSearch(term) {
    // function call to collect list of videos
    YTSearch({key: API_KEY, term: term}, (videos) => { 
      this.setState({ 
        videos: videos, // pass list of videos
        selectedVideo: videos[0] // first video set to variable
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar 
          onSearchTermChange={videoSearch} />
        <VideoDetail 
          video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.querySelector('.container'));