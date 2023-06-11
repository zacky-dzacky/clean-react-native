import { Pokemon } from "@domain/entities/Pokemon";

export interface GetPokemonUseCase {
    getPokemon: () => Promise<Pokemon>
}