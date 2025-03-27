import styled from 'styled-components';
import bgImgThree from './images/three.jpg'; // Caminho correto para a imagem
export const Container = styled.div`
    width:100%;
    height:100vh;
    background-image: url(${bgImgThree});
    background-position:center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
` 

export const Content = styled.div`
    width: 310px;
    border-radius:5px;
    border:1px solid rgb(106, 106, 106);
    background-color:rgb(39, 39, 39);
` 

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3px;
    margin: 3px;
`