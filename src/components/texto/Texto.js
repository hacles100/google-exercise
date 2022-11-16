import { useEffect, useState } from 'react';

import './Texto.css'

function Texto(){

// the text entered by the user
const [text, setText] = useState('');

// word count
const [wordCount, setWordCount] = useState(0);

// character count
const [charCount, setCharCount] = useState(0);

const changeHandler = (event) => {
  setText(event.target.value);
};

useEffect(() => {
  // array of words
  const words = text.split(' ');

  // update word count
  let wordCount = 0;
  words.forEach((word) => {
    if (word.trim() !== '') {
      wordCount++;
    }
  });
  setWordCount(wordCount);

  // update char count (including whitespaces)
  setCharCount(text.length);
}, [text]);


  
    return(
        <div className='container'>
          <div>
            <h1>Digite um texto:</h1> <br/>
            <textarea value={text} onChange={changeHandler}></textarea> <br/>
            <p className='word-count'>Word Count: {wordCount}</p>
            <p className='char-count'>
            Character Count (Including Whitespaces): {charCount}
          </p>
        </div>

        <div>
            <h1>Digite um texto:</h1> <br/>
            <textarea></textarea> <br/>
           <button>Counter</button>
           <span>{} se repete vezes no campo de texto</span>
        </div>
        </div>
    )
}

export default Texto