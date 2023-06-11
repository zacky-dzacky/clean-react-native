import { Pokemon } from "@domain/entities/Pokemon";
import { GetPokemonUseCase } from "@domain/useCases";

export class PokemonService implements GetPokemonUseCase {
    async getPokemon(): Promise<Pokemon> { // TODO cari apa itu promise
        return Promise.resolve(new Pokemon("Pokemon", "https://pokeapi.co/api/v2/pokemon/2/"))
    }

}