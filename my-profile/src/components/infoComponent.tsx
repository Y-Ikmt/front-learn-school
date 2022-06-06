
import styled from "styled-components";
import info1 from '../img/info1.png';
import title from '../img/title.png';
import React from "react";
import { useHistory } from "react-router-dom";
import MediaQuery from "react-responsive";

type Props = {
    parentMethod:any
}

export const InfoComponents: React.FC<Props> = (props) => {

    const {parentMethod} = props;

    const history = useHistory()

    //Enterボタンのクリックイベント
    const clickEnterButton = () => {
        history.push('/menu');
        parentMethod('menu');
    };

    return (
    <>
    <MediaQuery query="(max-width: 767px)">
        <SImg src={info1}/>
        <SDiv>
            <SH1>- Info -</SH1>
            <SH2>■Name</SH2>
            <SP>池本　優</SP>
            <SH2>■Age</SH2>
            <SP>25</SP>
            <SH2>■Birthday</SH2>
            <SP>1997/03/18</SP>
            <SButton onClick={clickEnterButton}>←Back</SButton>
        </SDiv>
    </MediaQuery>
    <MediaQuery query="(min-width: 767px)">
        <SImg src={info1}/>
        <SDiv2>
            <SH1>- Info -</SH1>
            <SH2>■Name</SH2>
            <SP>池本　優</SP>
            <SH2>■Age</SH2>
            <SP>25</SP>
            <SH2>■Birthday</SH2>
            <SP>1997/03/18</SP>
            <SButton onClick={clickEnterButton}>←Back</SButton>
        </SDiv2>
    </MediaQuery>

    </>
    );
};

const SFrexBox = styled.div`
    display: flex;
    width-min:500px;
`;

const SDiv = styled.div`
position: relative;
width: 100%;
height: 85vh;
`;

const SDiv2 = styled.div`
position: relative;
width: 50%;
height: 85vh;
`;

const SImg = styled.img`
position: absolute;
right:0;
bottom:0;
margin:0;
float:right;
width: 1000px;
max-width:100%;
`;

const STitle = styled.img`
    position: absolute;
    width: 687px;
    top: 150px;
    left: 100px;
`;

const SH1 = styled.h1`
font-family: 'Orbitron', sans-serif;
margin:20px 0 50px; 0;
color:#000000;
font-size: 50px;
`;
const SH2 = styled.h2`
    font-family: 'Orbitron', sans-serif;
    font-style: normal;
    font-size: 42px;
    color: #000000;
    margin:0;
`;
const SP = styled.p`
    font-family: 'Orbitron', sans-serif;
    font-style: normal;
    font-size: 34px;
    color: #000000;
    margin:0 0;
    margin:0 0 20px 0;
`;

const SButton = styled.div`
font-family: 'Orbitron', sans-serif;
text-align: center;
background: #D9D9D9;
margin-top:60px;
margin-bottom:40px;
margin-left:auto;
margin-right:auto;
padding-top:10px;
padding-bottom:10px;
width:200px;
max-width:80%;
font-size: 34px;
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