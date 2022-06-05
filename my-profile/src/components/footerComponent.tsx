import styled from "styled-components";

export const FooterComponents = () => {
    return (
        <SFooter>
            <p>Please give me a job offer.</p>
        </SFooter>
    );
};

const SFooter = styled.footer`
position:absolute;
bottom: 0;
font-size:20px;
background: #000000;
text-align:center;
color:#f6f5f5;
width:100%;
height:75px;
font-family: 'Orbitron', sans-serif;
`;
