import React, { Component } from 'react'

export default class SearchOptions extends Component {
  state = {
    searchTitle: ''
  }
  handleForm = event => {
    if(!this.state.searchTitle){
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const queryParam = new URLSearchParams();
    queryParam.set('recipe', this.state.searchTitle);
    window.location.hash = queryParam.toString();
  }
  render() {
    return(
      <div id="search">
        <form onSubmit={this.handleForm}>
        <input onChange={e => this.setState({ searchTitle: e.target.value})} value={this.state.searchTitle}/>
        <button>Search</button>
        </form>
      </div>
    );
  }
}
