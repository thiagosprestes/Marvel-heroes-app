import React from 'react';

import { Container, Title, SubTitle, Categories, Category } from './styles';

import Hero from '../../assets/icons/hero.svg';
import Villain from '../../assets/icons/villain.svg';
import Antihero from '../../assets/icons/antihero.svg';
import Alien from '../../assets/icons/alien.svg';
import Human from '../../assets/icons/human.svg';

const Home = () => {
    return (
        <Container>
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
        </Container>
    );
};

export default Home;
