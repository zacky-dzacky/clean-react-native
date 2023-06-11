import * as React from 'react';
import {
  Text,
  Layout,
  useTheme
} from '@ui-kitten/components';
import { Image } from 'react-native'
import { Mapping } from '@config/theme';
import { FlatList, StyleSheet, View } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Pokemon } from '@domain/entities/Pokemon';
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import StateTypes from '@infraestructure/reducer/stateTypes';

export const ListPokemonRoute = "asdfasdf"

export const ListPokemonScreen: React.FC = () => {
    const theme = useTheme();
    const pokemons: StateTypes['pokemons'] = useSelector(
      (state: StateTypes) => state.pokemons,
    );

    // const renderNowPlaying = ({item}: {item: Pokemon}) => {
    //   return<View style={styles.box}>
    //   <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/500px-International_Pokémon_logo.svg.png'}}
    //   style={{width: 100, height: 20}}/>
    //   <Text style={styles.item}>{item.name}</Text>
    // </View>};
    // };
    const renderNowPokemons = ({item}: {item: Pokemon}) => {
      return <View style={styles.box}>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/500px-International_Pokémon_logo.svg.png'}}
              style={{width: 100, height: 20}}/>
            <Text style={styles.item}>{item.name}</Text>
      </View>;
    };
    
    return (
      <ScrollView style={styles.container}>
     <FlatList
        showsHorizontalScrollIndicator={false}
        data={pokemons.nowPokemon}
        renderItem={renderNowPokemons}
        keyExtractor={(pokemon: Pokemon) => pokemon.name.toString()}
        horizontal={true}
      /></ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: "red"
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      marginTop: 10
    },
    box: {
      alignItems: 'center',

    }
  });

// export default ListPokemonScreen;