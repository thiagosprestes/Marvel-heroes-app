import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    flex: 1;
    background-color: #f8f8f8;
    padding: 20px;
`;

export const Title = styled.Text`
    color: #313140;
    font-size: 32px;
    font-family: 'gilroy-heavy';
`;

export const SubTitle = styled.Text`
    color: #b7b7b7;
    font-size: 14px;
    font-family: 'gilroy-semibold';
`;

export const Categories = styled.View`
    flex-direction: row;
    margin-top: 30px;
`;

export const Category = styled(LinearGradient)`
    padding: 15px;
    margin-right: 10px;
    border-radius: 50px;
`;
