import React,{useState,useEffect} from 'react';
import './App.css';
import Figure from './components/Figure'
import Header from './components/Header'
import Notification from './components/Notification'
import Popup from './components/Popup'
import Word from './components/Word'
import WrongLetters from './components/WrongLetters'
import {showNotification as show} from './helpers/helper'

//游戏的单词数组
const words = ["application", "programming", "interface", "wonder"];
//随机生成游戏单词
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  //初始化state
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongletters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [playable, setPlayable] = useState(false);

  //实现键盘的监听事件，更新state值
  useEffect(() => {
    const handleKeydown = e => {
      const { key, keyCode } = e;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        //判断用户按下的字母是否在随机生成的游戏单词里面
        if (selectedWord.includes(letter)) {
          //不能重复出现
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(correctLetters => [...correctLetters, letter])
          } else {
            //显示警告提示
            show(setShowNotification)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongletters(wrongLetters => [...wrongLetters,letter])
          } else {
            //显示警告提示
            show(setShowNotification)
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  },[correctLetters,wrongLetters, playable])


 
 // 重置游戏
 function playAgain() {
  setPlayable(true);
  //清空数组
  setCorrectLetters([]);
  setWrongletters([]);

//随机生成游戏单词\
  const random = Math.floor((Math.random() * words.length));
  selectedWord = words[random];
}
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} playAgain={ playAgain }/>
        <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
