
import styled from "styled-components";
import me from '../img/me.png';
import title from '../img/title.png';
import React from "react";
import { useHistory } from "react-router-dom"

type Props = {
    parentMethod:any
}

export const TopComponents: React.FC<Props> = (props) => {

    const {parentMethod} = props;

    const history = useHistory()

    //Enterボタンのクリックイベント
    const clickEnterButton = () => {
        history.push('/menu');
        parentMethod('menu');
    };

    return (
        <SDiv>
            <STitle src={title}/>
            <SP>Self-revealing desire</SP>
            <SImg src={me}/>
            <SButton onClick={clickEnterButton}>Enter</SButton>
        </SDiv>
    );
};
const SDiv = styled.div`
    position: relative;
    width: 100%;
    height: 85vh;
`;

const STitle = styled.img`
    width: 800px;
    max-width:80%;
    margin-top: 20px;
`;

const SImg = styled.img`
    position: absolute;
    right:0;
    bottom:0;
    height: 80%;
`;

const SP = styled.p`
    font-family: 'Orbitron', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #000000;
    font-size:min(5.3vw,50px);
    margin:10px 0;
    margin-bottom:50px;
`;

const SButton = styled.a`
    font-family: 'Orbitron', sans-serif;
    background: #D9D9D9;
    font-size: min(5.3vw,50px);
    padding:10px 40px;
    border-radius: 10px;
    text-decoration: none;
    color: #000000;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.60));
    transition: all .4s;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.90));
    }
`;