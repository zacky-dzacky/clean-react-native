import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {getInitialDataAction} from '../../infrastructure/sagas/redux';
import {ListPokemonRoute} from './ListPokemon';
// import {Colors} from '../configs/styles';
// import StateTypes from '../core/adapters/redux/reducers/stateTypes';

export const SplashPageRoute = 'splash';

const SplashPage: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  // const loadingState: boolean = useSelector(
  //   (state: StateTypes) => state.loading.initialData,
  // );

  // useEffect(() => {
  //   dispatch(getInitialDataAction());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!loadingState) {
  //     navigation.reset({
  //       index: 1,
  //       routes: [{name: HomePageRoute}],
  //     });
  //   }
  // }, [navigation, loadingState]);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Pokemon</Text>
      <ActivityIndicator size="small" color={styles.container.backgroundColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#dedede',
  },
});

export default SplashPage;
