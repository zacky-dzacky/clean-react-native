import { UPDATE_NOW_POKEMON } from '../actions/pokemonAction';
import StateTypes from './stateTypes';
import { UpdatePokemonActionType } from '@infraestructure/actions/pokemons';

type PokemonStateType = StateTypes['pokemons'];
const initState: StateTypes['pokemons'] = {
  nowPokemon: []
};

export default (
  state: PokemonStateType = initState,
  action: UpdatePokemonActionType,
): PokemonStateType => {
  const {pokemons, type} = action;
  switch (type) {
    case UPDATE_NOW_POKEMON: {
      return {
        ...state,
        nowPokemon: pokemons,
      };
    }
    default : return state
  }
};
