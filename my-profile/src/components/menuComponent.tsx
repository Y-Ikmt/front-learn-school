import styled from "styled-components";
import me from '../img/menu_me.png';
import { useHistory } from "react-router-dom"



type Props = {
    parentMethod:any;
}

export const MenuComponents: React.FC<Props> = (props) => {

    const {parentMethod} = props;

    const history = useHistory()

    //ボタンのクリックイベント
    const clickMenuButton = (str:string) => {
        history.push(`/${str}`);
        parentMethod(str);
    };

    type Props = {
        labelText:string
        path:string
    }
    const VerticalButton: React.FC<Props> = (props) => {
        const {labelText, path} = props;
        return (
            <SButton onClick={ () => clickMenuButton(path) }>{labelText}</SButton>
        );
    }

    return (
        <SDiv>
            <SImg src={me}/>
            <SH1>-Menu-</SH1>
            <VerticalButton labelText="Info" path="info"/>
            <VerticalButton labelText="History" path="history"/>
            <VerticalButton labelText="Hobby" path="hobby"/>
        </SDiv>
    );
};

const SDiv = styled.div`
position: relative;
width: 100%;
height: 85vh;
`;

const SH1 = styled.h1`
font-family: 'Orbitron', sans-serif;
margin:20px 0 50px; 0;
color:#000000;
font-size: 50px;
`;

const SImg = styled.img`
position: absolute;
right:0;
bottom:0;
height: 80%;
`;

const SVerticalButton = styled.div`
margin-bottom:30px;
`;

const SButton = styled.div`
font-family: 'Orbitron', sans-serif;
background: #D9D9D9;
margin-bottom:40px;
margin-left:auto;
margin-right:auto;
padding-top:10px;
padding-bottom:10px;
width:500px;
max-width:80%;
font-size: 50px;
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