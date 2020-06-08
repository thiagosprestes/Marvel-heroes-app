import React from 'react';

import {
    Container,
    ListHeader,
    Title,
    More,
    ListItem,
    Item,
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
                        source={{
                            uri: `http://10.0.0.57:3333/${character.imagePath}`,
                        }}
                    >
                        <ItemSubtitle>{character.alterEgo}</ItemSubtitle>
                        <ItemTitle>{character.name}</ItemTitle>
                    </Item>
                ))}
            </ListItem>
        </Container>
    );
};

export default List;
