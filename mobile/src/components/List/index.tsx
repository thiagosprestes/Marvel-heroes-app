import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { SharedElement } from 'react-navigation-shared-element';

import {
    Container,
    ListHeader,
    Title,
    More,
    ListItem,
    Item,
    ItemInfo,
    ItemBackground,
    Gradient,
    ItemSubtitle,
    ItemTitle,
} from './styles';

interface Props {
    title: string;
    characters: {
        name: string;
        alterEgo: string;
        imagePath: string;
    }[];
}

const List: React.FC<Props> = ({ title, characters }) => {
    const navigation = useNavigation();

    return (
        <Container>
            <ListHeader>
                <Title>{title}</Title>
                <More>Ver tudo</More>
            </ListHeader>
            <ListItem
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
            >
                {characters.map((character) => (
                    <Item
                        key={character.name}
                        onPress={() =>
                            navigation.navigate('Character', { character })
                        }
                        activeOpacity={0.8}
                    >
                        <SharedElement id={`item.${character.name}.photo`}>
                            <ItemBackground
                                resizeMode="cover"
                                source={{
                                    uri: `http://10.0.0.57:3333/${character.imagePath}`,
                                }}
                            />
                        </SharedElement>
                        <Gradient
                            start={[0.1, 0.4]}
                            colors={['rgba(0, 0, 0, 0)', '#000']}
                        />
                        <ItemInfo>
                            <SharedElement
                                id={`item.${character.name}.alterEgo`}
                            >
                                <ItemSubtitle>
                                    {character.alterEgo}
                                </ItemSubtitle>
                            </SharedElement>
                            <SharedElement id={`item.${character.name}.name`}>
                                <ItemTitle>{character.name}</ItemTitle>
                            </SharedElement>
                        </ItemInfo>
                    </Item>
                ))}
            </ListItem>
        </Container>
    );
};

export default List;
