import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

import PlayersFilters from './filters';
import PlayersList from './list';

class Players extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPlayers();
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
        <span className="eror-text">There's was an error loading data.</span>
      )
    }

    return (
      <>
        <PlayersFilters onSubmit={console.log} />

        <PlayersList players={players} />
      </>
    )
  }
}

export default connect(
  store => ({
    players: store.players.data,
    error: store.players.error,
    loading: !store.players.data && !store.players.error
  }),
  actions,
)(Players);