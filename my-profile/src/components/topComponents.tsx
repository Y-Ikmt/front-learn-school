
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
            <SButton onClick={clickEnterButton}>Enter</SButton>
            <SImg src={me} alt="logo"/>
        </SDiv>
    );
};
const SDiv = styled.div`
    position: relative;
    width: 100%;
    height: 85vh;
    min-width:1300px;
`;

const SImg = styled.img`
    position: absolute;
    right:0;
    bottom:0;
    height: 100%;
`;

const STitle = styled.img`
    position: absolute;
    width: 687px;
    top: 150px;
    left: 100px;
`;

const SP = styled.p`
    position: absolute;
    width: 687px;
    height: 40px;
    left: 100px;
    top: 400px;
    font-family: 'Orbitron', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    text-align:left;
    color: #000000;
`;

const SButton = styled.a`
    position: absolute;
    height: 40px;
    left: 100px;
    top: 520px;
    font-family: 'Orbitron', sans-serif;
    background: #D9D9D9;
    font-size: 32px;
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