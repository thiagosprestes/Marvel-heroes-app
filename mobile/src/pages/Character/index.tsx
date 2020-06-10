import React from 'react';

import { RouteProp } from '@react-navigation/native';

import { SharedElement } from 'react-navigation-shared-element';

import {
    Container,
    CharacterBio,
    CharacterImage,
    Gradient,
    CharacterData,
    AlterEgo,
    Name,
    Caracteristics,
    Caracteristic,
    CaracteristicValue,
    Title,
    Abilities,
    Ability,
    Movies,
    Movie,
} from './styles';

import Age from '../../assets/icons/age.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';
import Universe from '../../assets/icons/universe.svg';

type RootProps = {
    Params: {
        character: {
            imagePath: string;
            alterEgo: string;
            name: string;
            biography: string;
            caracteristics: {
                birth: number;
                weight: {
                    value: number;
                    unity: string;
                };
                height: {
                    value: number;
                    unity: string;
                };
                universe: string;
            };
            abilities: {
                force: number;
                intelligence: number;
                agility: number;
                endurance: number;
                velocity: string;
            };
            movies: Array<[]>;
        };
    };
};

type CharacterProps = RouteProp<RootProps, 'Params'>;

interface Props {
    route: CharacterProps;
}

const Character: React.FC<Props> = ({ route }) => {
    const { character } = route.params;

    function getAge(birth: number) {
        const year = new Date().getFullYear();

        return year - birth;
    }

    return (
        <Container>
            <SharedElement id={`item.${character.name}.photo`}>
                <CharacterImage
                    resizeMode="cover"
                    source={{
                        uri: `http://10.0.0.57:3333/${character.imagePath}`,
                    }}
                />
            </SharedElement>
            <Gradient colors={['transparent', '#000']} />
            <CharacterData>
                <Gradient colors={['transparent', '#000']} />
                <AlterEgo>{character.alterEgo}</AlterEgo>
                <Name>{character.name}</Name>
                <Caracteristics>
                    <Caracteristic>
                        <Age />
                        <CaracteristicValue>
                            {getAge(character.caracteristics.birth)} anos
                        </CaracteristicValue>
                    </Caracteristic>
                    <Caracteristic>
                        <Weight />
                        <CaracteristicValue>
                            {character.caracteristics.weight.value}
                            {character.caracteristics.weight.unity}
                        </CaracteristicValue>
                    </Caracteristic>
                    <Caracteristic>
                        <Height />
                        <CaracteristicValue>
                            {character.caracteristics.height.value.toFixed(2)}
                            {character.caracteristics.height.unity.charAt(0)}
                        </CaracteristicValue>
                    </Caracteristic>
                    <Caracteristic>
                        <Universe />
                        <CaracteristicValue>
                            {character.caracteristics.universe}
                        </CaracteristicValue>
                    </Caracteristic>
                </Caracteristics>
                <CharacterBio>{character.biography}</CharacterBio>
                <Title>Habilidades</Title>
                <Abilities>
                    <Ability>Força</Ability>
                    <Ability>Inteligência</Ability>
                    <Ability>Agilidade</Ability>
                    <Ability>Resistência</Ability>
                    <Ability>Velocidade</Ability>
                </Abilities>
                <Title>Filmes</Title>
                <Movies
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                    {character.movies.map((movie) => (
                        <Movie
                            key={String(movie)}
                            source={{
                                uri: `http://10.0.0.57:3333/${movie}`,
                            }}
                        />
                    ))}
                </Movies>
            </CharacterData>
        </Container>
    );
};

export default Character;
