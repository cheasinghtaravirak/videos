import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//App is a class based component b/c it handles application's state
class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  //methods
  //make an api request. thus, use async/await system
  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }
    });
    this.setState({videos: response.data.items});
  }
  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <VideoDetail selectedVideo={this.state.selectedVideo}/> 
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    );
  }
}

export default App;
