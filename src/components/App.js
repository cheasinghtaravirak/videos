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
  //lifecycle method
  componentDidMount() {
    this.onSearchSubmit('tiger'); 
  }
  //methods
  //make an api request. thus, use async/await system
  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }
  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
