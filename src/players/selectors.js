import { createSelector } from 'reselect'

function getFilters(state) {
  return state.players.filters;
}

function getNameFilter(state) {
  return getFilters(state).name;
}

function getPositionFilter(state) {
  return getFilters(state).position;
}

function getAgeFilter(state) {
  return getFilters(state).age;
}

function getPlayersData(state) {
  return state.players.data;
}

const getPlayers = createSelector(
  getNameFilter,
  getPositionFilter,
  getAgeFilter,
  getPlayersData,
  (nameFilter, positionFilter, ageFilter, data) => {
    if (nameFilter || positionFilter || ageFilter) {
      return data.filter((player) => {
        if (positionFilter && positionFilter !== player.position) {
          return false;
        }

        if (ageFilter && ageFilter !== player.age) {
          return false;
        }

        if (nameFilter) {
          const nameInLowerCase = player.name.toLowerCase();
          const filterInLowerCase = nameFilter.toLowerCase().trim();

          if (!nameInLowerCase.includes(filterInLowerCase)) {
            return false;
          }
        }

        return true;
      });
    }

    return data;
  }
)

export default {
  getPlayers,
}