import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ListHeader,
    Title,
    More,
    ListItem,
    Item,
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
                        <ItemBackground
                            source={{
                                uri: `http://10.0.0.57:3333/${character.imagePath}`,
                            }}
                        >
                            <Gradient
                                start={[0.1, 0.4]}
                                colors={['rgba(0, 0, 0, 0)', '#000']}
                            />
                            <ItemSubtitle>{character.alterEgo}</ItemSubtitle>
                            <ItemTitle>{character.name}</ItemTitle>
                        </ItemBackground>
                    </Item>
                ))}
            </ListItem>
        </Container>
    );
};

export default List;
