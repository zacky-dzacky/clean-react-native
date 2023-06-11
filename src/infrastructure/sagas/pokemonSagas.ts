import { PokemonRepositoryImpl } from "@domain/repositories/PokomenRepositoryImpl";
import { GetPokemonUseCaseImpl } from "@domain/useCases/GetPokemonUseCaseImpl";
import { updateNowPokemons } from "../actions/pokemonAction";
import {takeLatest, all, put, call} from 'redux-saga/effects';
import { updateInitialDataLoading } from "../actions/loading";

const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

function* getNowPokemonSaga() {
    try {
      const service = new PokemonRepositoryImpl();
      const interactor = new GetPokemonUseCaseImpl(service);
  
      const pokemons = yield interactor.getPokemon();
      yield put(updateNowPokemons(pokemons));
    } catch (error) {
      console.error(error);
    }
  }

  function* getInitialDataSaga() {
    yield all([
      call(getNowPokemonSaga)
    ]);
    yield put(updateInitialDataLoading(false));
  }
  
  export default function* rootSaga() {
    yield all([takeLatest(GET_INITIAL_DATA, getInitialDataSaga)]);
  }