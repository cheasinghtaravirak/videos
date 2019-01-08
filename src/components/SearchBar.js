import React from 'react';

//SearchBar is a class-based component b/c it has a state.
class SearchBar extends React.Component {

  state = {
    term: '',
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term); 
  }

  //onInputChange defined as an arrow function b/c it will be used as a callback in <input />
  onInputChange = event => {
    this.setState({ term: event.target.value});
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" onChange={this.onInputChange} value={this.state.term}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
