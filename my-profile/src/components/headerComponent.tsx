import styled from "styled-components";
import logo from '../img/logo.png';
import { useHistory } from "react-router-dom"

type Props = {
    parentMethod:any
}

export const HeaderComponents: React.FC<Props> = (props) => {

    const {parentMethod} = props;

    const history = useHistory()

    //Enterボタンのクリックイベント
    const clickHomeButton = () => {
        parentMethod('top');
        history.push('/');
    };

    return (
        <SHeader>
            <SImg src={logo} onClick={clickHomeButton} alt="logo"/>
        </SHeader>
    );
};

const SHeader = styled.header`
    position: relative;
    width:100%;
    height:75px;
    background-color: #000000;
`;

const SImg = styled.img`
    margin-top:5px;
    margin-left:10px;
    float: left;
    transition: all .4s;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(8px 8px 8px rgba(255, 255, 255, 0.90));
    }
`;