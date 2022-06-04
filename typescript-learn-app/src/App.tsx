import {ChangeEvent, useState,FC, useCallback} from 'react';
import styled  from "styled-components";
import './App.css';
import { MemoList } from './components/MemoList';
import { useMemoList } from './hooks/useMemoList';

export const App: FC = () => {
  //カスタムフックからそれぞれ取得
  const {memos, addTodo, deleteTodo} = useMemoList();

  //テキストボックスState
  const [text, setText] = useState<string>("");
  //メモ一覧state
  //const [memos, setMemos] = useState<string[]>([]);

  //テキストボックス入力時に入力内容をstateに設定
  const onChangeText = (e:ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  //追加ボタン
  const onClickAdd = () =>{
    //state変更を正常に検知させるため新たな配列を生成
    //const newMemos = [...memos];
    //テキストボックスの入力内容を配列にセット
    //newMemos.push(text);
    //setMemos(newMemos);

    if(text){
      //カスタムフックから呼び出し
      addTodo(text);

      //テキストボックスを空にする
      setText("");
    }
  };

  //削除ボタン押下時処理
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText}></input>
      <Sbutton onClick={onClickAdd}>追加</Sbutton>

      <MemoList memos={memos} onClickDelete={onClickDelete}/>
    </div>
  );
}

const Sbutton = styled.button`
margin-left: 16px;
`;


export default App;
