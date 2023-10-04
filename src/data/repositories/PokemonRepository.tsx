import { Pokemon } from "@domain/entities/Pokemon";

export interface PokemonRepository {
    getPokemon : () => Promise<Pokemon>
    updatePokemon : () => Promise<Pokemon>
}