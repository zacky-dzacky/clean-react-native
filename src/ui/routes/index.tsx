import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ListPokemonRoute, ListPokemonScreen} from '../../ui/screens/';
import { SplashPageRoute } from '@ui/screens/Splash';

const Stack = createStackNavigator<ParamsTypes>();

export type ParamsTypes = {
  [ListPokemonRoute]: {};
//   [HomePageRoute]: {};
//   [DetailPageRoute]: {
//   };
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ListPokemonRoute} >
        <Stack.Screen name={ListPokemonRoute} component={ListPokemonScreen} />
        {/* <Stack.Screen name={HomePageRoute} component={HomePage} />
        <Stack.Screen name={DetailPageRoute} component={DetailPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
