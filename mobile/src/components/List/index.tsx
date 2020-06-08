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
}

const List: React.FC<Props> = ({ title }) => {
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
                <Item source={require('../../assets/spider-man.png')}>
                    <ItemSubtitle>Peter Parker</ItemSubtitle>
                    <ItemTitle>Homem Aranha</ItemTitle>
                </Item>
                <Item source={require('../../assets/spider-man.png')}>
                    <ItemSubtitle>Peter Parker</ItemSubtitle>
                    <ItemTitle>Homem Aranha</ItemTitle>
                </Item>
                <Item source={require('../../assets/spider-man.png')}>
                    <ItemSubtitle>Peter Parker</ItemSubtitle>
                    <ItemTitle>Homem Aranha</ItemTitle>
                </Item>
                <Item source={require('../../assets/spider-man.png')}>
                    <ItemSubtitle>Peter Parker</ItemSubtitle>
                    <ItemTitle>Homem Aranha</ItemTitle>
                </Item>
            </ListItem>
        </Container>
    );
};

export default List;
