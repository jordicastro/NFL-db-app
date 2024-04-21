import React from 'react'
import { useState, FormEvent } from 'react'

const addGame = (gameName : string) => {
  console.log(`adding game: ${gameName}`)
  // query to add game to game table
  
}

const AddGameForm = () => {
  const [gameName, setGameName] = useState('');

  const onSubmitGame = (e : FormEvent) => {
    e.preventDefault();
    addGame(gameName);
    // query to add game to game table
  };

  return (
      <form onSubmit={onSubmitGame}>
        <h3 className='text-2xl font-bold text-black-500'>1. Add a game to the Game table</h3>
        
        <input className='py-1 pl-2 text-lg'
                type="text"
                placeholder="Game Name"
                value={gameName}
                onChange={(e) => {setGameName(e.target.value)}}
        />
        <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit" >Submit</button>
      </form>
  )
}

export default AddGameForm