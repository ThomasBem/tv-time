// @flow

import React from 'react';

const createSearchUrl = (query) => (`http://api.tvmaze.com/search/shows?q=${query}`);

type State = {
  tvShows: [],
  query: string,
}

class Search extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      tvShows: [],
      query: '',
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.search = this.search.bind(this);
  }

  updateQuery = (event: any) => {
    this.setState({ query: event.target.value });
  }

  search = () => {
    fetch(createSearchUrl(this.state.query))
      .then(response => response.json())
      .then(result => {
        this.setState({ tvShows: result })
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.updateQuery} />
        <button onClick={this.search}>Search</button>
        {
          this.state.tvShows.map(show => {
            return (
              <li key={show.show.id}>
                <p>{show.show.name}</p>
              </li>
            )
          })
        }
      </div>
    );
  }
}

export default Search;