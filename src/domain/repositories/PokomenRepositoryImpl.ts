import Request from "@config/request";
import { PokemonRepository } from "@data/repositories/PokemonRepository";
import { Pokemon } from "@domain/entities/Pokemon";

export class PokemonRepositoryImpl implements PokemonRepository {
    
    request: Request

    constructor() {
        this.request = new Request()
    }

    async getPokemon(): Promise<Pokemon> {
        const response = await this.request.get('pokemon?limit=100000&offset=0');
        const result = response.data.pokemon;
        const pokemons = result.map((pockemon: any) => Pokemon.fromJson(pockemon));
        return pokemons;
    }

    async updatePokemon(): Promise<Pokemon>{
        return Pokemon.fromJson(null)
    }
    
}