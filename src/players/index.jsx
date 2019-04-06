import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';
import selectors from './selectors';

import PlayersFilters from './filters';
import PlayersList from './list';

class Players extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  onSearch = (filters) => {
    this.props.setPlayersFilters(filters);
  }

  render () {
    const {
      error,
      players,
      loading,
    } = this.props;

    if (loading) {
      return (
        <span>Loading data...</span>
      )
    }

    if (error) {
      return (
        <span className="error-text">There's was an error loading data.</span>
      )
    }

    return (
      <>
        <h1>Football Players Finder</h1>
        
        <PlayersFilters onSubmit={this.onSearch} />

        <PlayersList players={players} />
      </>
    )
  }
}

export default connect(
  store => ({
    players: selectors.getPlayers(store),
    error: store.players.error,
    loading: !store.players.data && !store.players.error
  }),
  actions,
)(Players);