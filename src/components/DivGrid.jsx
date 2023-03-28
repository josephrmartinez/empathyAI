import React, { useState } from 'react';

export default function DivGrid({ words, section, bgColor, updateFields, handleDivClick}) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [userInputActive, setUserInputActive] = useState(false)
  const [userInputValue, setUserInputValue] = useState("")

  function handleAddClick() {
    setUserInputActive(!userInputActive)
  }

  function handleInputChange(e) {
    setUserInputValue(e.target.value.toLowerCase())
  }

  function handleInputSubmit(e) {
    const inputVal = e.target.value.trim(); // Trim input value

    if (inputVal.length === 0 || !/^[a-zA-Z\s]+$/.test(inputVal)) {
      // If input value consists only of whitespace or input value contains non-alphabetic characters, skip ahead to clearing input field and toggling userInputActive
      setUserInputValue("");
      setUserInputActive(!userInputActive);
      return;
    }

    // Add new word to words array
    words.push({ word: inputVal, selected: true });

    // Clear input field and toggle userInputActive
    setUserInputValue("");
    setUserInputActive(!userInputActive);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      handleInputSubmit(e)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      {words.map((word, index) => (
        <div
          key={index}
          className={`py-2 px-3 rounded-full cursor-pointer antialiased`}
          style={word.selected
            ? { color: '#FEFEFE', backgroundColor: bgColor, borderWidth: '1px', borderColor: bgColor }
            : { color: '#606060', borderWidth: '1px', borderColor: '#c5c5c5'}}
          onClick={() => handleDivClick(section, index)}
        >
          {word.word}
        </div>
      ))}
      {userInputActive ?
        <div className='py-2 px-3 rounded-full' style={{ borderWidth: '1px', borderColor: '#c5c5c5' }}>
          <input
            type="text"
            value={userInputValue}
            className='outline-none w-16 text-center rounded-full antialiased'
            style={{ color: '#606060', backgroundColor: 'transparent' }}
            autoFocus
            onChange={handleInputChange}
            onBlur={handleInputSubmit}
            onKeyDown={handleKeyDown}
          ></input></div>
        : <div onClick={handleAddClick} className="cursor-pointer text-xl select-none" style={{ color: '#a8a8a8'}}>+</div>}
    </div>
  );
}
