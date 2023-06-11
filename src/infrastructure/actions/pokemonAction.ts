import { Pokemon } from "@domain/entities/Pokemon";


export const UPDATE_NOW_POKEMON = 'UPDATE_NOW_POKEMON';

export interface UpdatePokemonActionType {
    type: string;
    pokemon: Pokemon[];
  }

export const updateNowPokemons = (
    pokemons: Pokemon[],
  ): UpdatePokemonActionType => {
    return {
      type: UPDATE_NOW_POKEMON,
      pokemon: pokemons,
    };
  };