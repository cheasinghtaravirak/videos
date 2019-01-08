import React from 'react';
import SearchBar from './SearchBar';
//App is a class based component b/c it handles application's state
class App extends React.Component {

  onSearchSubmit = term => {
    console.log(term); 
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
