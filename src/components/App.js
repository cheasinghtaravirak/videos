import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
//App is a class based component b/c it handles application's state
class App extends React.Component {

  onSearchSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term,
      }
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
