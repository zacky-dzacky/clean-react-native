import { Pokemon } from "@domain/entities/Pokemon";
import { GetPokemonUseCase } from "./GetPokemonUseCase";
import { PokemonRepository } from "@data/repositories/PokemonRepository";

export class GetPokemonUseCaseImpl implements GetPokemonUseCase {

    _repository: PokemonRepository;
    
    constructor(repository: PokemonRepository) {
        this._repository = repository
    }
    
    async getPokemon() : Promise<Pokemon>{
        return this._repository.getPokemon()
    }

}