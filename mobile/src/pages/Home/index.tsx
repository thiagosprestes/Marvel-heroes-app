import React from 'react';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Categories,
    Category,
    Items,
} from './styles';

import Hero from '../../assets/icons/hero.svg';
import Villain from '../../assets/icons/villain.svg';
import Antihero from '../../assets/icons/antihero.svg';
import Alien from '../../assets/icons/alien.svg';
import Human from '../../assets/icons/human.svg';

import List from '../../components/List';

const Home = () => {
    return (
        <Container>
            <Header>
                <SubTitle>Bem vindo ao Marvel Heroes</SubTitle>
                <Title>Escolha o seu</Title>
                <Title>Personagem</Title>
                <Categories>
                    <Category colors={['#005BEA', '#00C6FB']}>
                        <Hero width={32} height={32} />
                    </Category>
                    <Category colors={['#ED1D24', '#ED1F69']}>
                        <Villain width={32} height={32} />
                    </Category>
                    <Category colors={['#B224EF', '#7579FF']}>
                        <Antihero width={32} height={32} />
                    </Category>
                    <Category colors={['#0BA360', '#3CBA92']}>
                        <Alien width={32} height={32} />
                    </Category>
                    <Category colors={['#FF7EB3', '#FF758C']}>
                        <Human width={32} height={32} />
                    </Category>
                </Categories>
            </Header>
            <Items>
                <List title="Heróis" />
                <List title="Vilões" />
                <List title="Anti-heróis" />
                <List title="Alienigenas" />
                <List title="Humanos" />
            </Items>
        </Container>
    );
};

export default Home;
