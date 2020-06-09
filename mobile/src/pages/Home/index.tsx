import React, { useState, useEffect } from 'react';

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

import api from '../../services/api';

const Home = () => {
    const [heroes, setHeroes] = useState([]);
    const [villains, setVillains] = useState([]);
    const [antiHeroes, setAntiheroes] = useState([]);
    const [aliens, setAliens] = useState([]);
    const [humans, setHumans] = useState([]);

    useEffect(() => {
        api.get('heroes').then((response) => {
            setHeroes(response.data);
        });
    }, []);

    useEffect(() => {
        api.get('villains').then((response) => {
            setVillains(response.data);
        });
    }, []);

    useEffect(() => {
        api.get('antiHeroes').then((response) => {
            setAntiheroes(response.data);
        });
    }, []);

    useEffect(() => {
        api.get('aliens').then((response) => {
            setAliens(response.data);
        });
    }, []);

    useEffect(() => {
        api.get('humans').then((response) => {
            setHumans(response.data);
        });
    }, []);

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
                <List title="Heróis" characters={heroes} />
                <List title="Vilões" characters={villains} />
                <List title="Anti-heróis" characters={antiHeroes} />
                <List title="Alienigenas" characters={aliens} />
                <List title="Humanos" characters={humans} />
            </Items>
        </Container>
    );
};

export default Home;
