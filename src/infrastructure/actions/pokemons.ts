import { Pokemon } from "@domain/entities/Pokemon";
import pokemons from "@infraestructure/reducer/pokemons";


export const UPDATE_NOW_POKEMON = 'UPDATE_NOW_POKEMON';

export interface UpdatePokemonActionType {
  type: string;
  pokemons: Pokemon[];
}

export const updateNowPlayingPokemon = (
  pokemons: Pokemon[],
): UpdatePokemonActionType => {
  return {
    type: UPDATE_NOW_POKEMON,
    pokemons: pokemons,
  };
};
