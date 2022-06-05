import styled from "styled-components";
import me from '../img/menu_me.png';


const menuArray = ["Info","History", "Hobby"]

export const MenuComponents = () => {

    //ボタンのクリックイベント
    const clickMenuButton = (i:number) => {
        alert(`${menuArray[i]}`);
    };

    return (
        <SDiv>
            <SH1>Menu</SH1>
                {menuArray.map((menuText, i) => <SButton onClick={ () => clickMenuButton(i) } key={i} style={{top: (i+1)*150}}>{menuText}</SButton>)}

            <SImg src={me} alt="me"/>
        </SDiv>
    );
};


const SH1 = styled.h1`
font-family: 'Orbitron', sans-serif;
color:#000000;
font-size: 50px;
position: absolute;
width: 687px;
height: 40px;
`;

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

const SButton = styled.a`
    position: absolute;
    height: 80px;
    width: 300px;
    left: 190px;
    top: 150px;
    font-family: 'Orbitron', sans-serif;
    background: #D9D9D9;
    font-size: 50px;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    color: #000000;
    padding-top: 15px; 
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.60));
    transition: all .4s;
    display: table-cell;
    vertical-align: middle;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.90));
    }
`;