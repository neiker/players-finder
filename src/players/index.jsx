import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from './store/actions';
import selectors from './store/selectors';

import PlayersFilters from './filters/index.jsx';
import PlayersList from './list/index.jsx';

export class Players extends React.PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,

    // Actions
    fetchPlayers: PropTypes.func.isRequired
  };

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

        <hr />
        
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