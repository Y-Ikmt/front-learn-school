import styled  from "styled-components";
import {FC} from "react"

//メモ一覧と削除時メソッド
type Props = {
    memos: string[];
    onClickDelete: (inedx: number) => void;
}

export const MemoList: FC<Props> = props => {
    const {memos, onClickDelete} = props;

    return (
        <Scontainer>
        <p>メモ一覧</p>
        <ul>
            {memos.map((memo, index) => (
                <li key = {memo}>
                    <SMemoWarapper>
                        <p>{memo}</p>
                        <Sbutton onClick = {() => onClickDelete(index)}>削除</Sbutton>
                    </SMemoWarapper>
                </li>
            ))}
        </ul>
        </Scontainer>
    );
};

const Sbutton = styled.button`
margin-left: 16px;
`;

const Scontainer = styled.div`
border: solid 1px #ccc;
padding: 16px;
margin: 8px;
`;

const SMemoWarapper = styled.div`
display: flex;
align-items: center;
`;