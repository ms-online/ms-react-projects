import React from 'react'
import {checkWin} from '../helpers/helper'

const Popup = ({ correctLetters, wrongLetters, selectedWord, playAgain}) => {
    // console.log(correctLetters, wrongLetters, selectedWord )
    let finalMessage = '';
    let finalMessageRevealWord = '';
   
    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = '恭喜你输入正确！ 😃'
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
        finalMessage = "抱歉输入错误，游戏结束. 😕";
        finalMessageRevealWord = `游戏单词为${selectedWord}`
    }


    return (
        <div className="popup-container" style={ finalMessage !== '' ? {display:'flex'} : {}}>
        <div className="popup">
            <h2 >{ finalMessage}</h2>
            <h3 >{ finalMessageRevealWord}</h3>
            <button onClick = {playAgain}>再玩一次</button>
      </div>
    </div>
    )
}

export default Popup
