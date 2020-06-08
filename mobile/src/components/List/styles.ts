import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 15px 0;
`;

export const ListHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 20px;
`;

export const Title = styled.Text`
    font-family: 'gilroy-bold';
    font-size: 18px;
    color: #f2264b;
`;

export const More = styled.Text`
    font-family: 'gilroy-medium';
    font-size: 14px;
    color: #b7b7c8;
`;

export const ListItem = styled.ScrollView``;

export const Item = styled.ImageBackground`
    width: 140px;
    height: 230px;
    border-radius: 16px;
    overflow: hidden;
    margin-right: 16px;
`;

export const ItemSubtitle = styled.Text`
    font-family: 'gilroy-medium';
    font-size: 10px;
    color: #fff;
    position: absolute;
    bottom: 45px;
    padding: 10px;
`;

export const ItemTitle = styled.Text`
    font-family: 'gilroy-heavy';
    font-size: 20px;
    color: #fff;
    position: absolute;
    bottom: 0;
    padding: 10px;
`;
