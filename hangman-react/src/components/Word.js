import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
    console.log(selectedWord,correctLetters)
    return (
        <div id="word" className="word">
            {selectedWord.split("").map((letter, i) => <span key={i}className="letter">
            {correctLetters.includes(letter) ? letter : ""}</span>
            )}
        </div>
    )
}

export default Word
