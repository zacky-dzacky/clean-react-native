import { Pokemon } from "@domain/entities/Pokemon";

;

export default interface StateTypes {
  loading: {
    initialData: boolean;
  };
  pokemons:{
    nowPokemon: Pokemon[]
  }
}
