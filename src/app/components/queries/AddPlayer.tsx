import React from 'react'
import { useState, FormEvent } from 'react'

const addPlayer = async (playerName : string) => {
    console.log(`adding player: ${playerName}`)
    // query to add player to player table
    const res = fetch('/api/player', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({playerName}),
    });

    return;

}

const AddPlayerForm = () => {
    const [playerName, setPlayerName] = useState('');

    const onSubmitPlayer = (e : FormEvent) => {
        e.preventDefault();
        addPlayer(playerName);
        // query to add player to player table
        return window.location.href = '/database/player';
    };

  return (
   <form onSubmit={onSubmitPlayer}>
      <h3 className='text-2xl font-bold text-black-500'>2. Add a player to a player table </h3>
      <input className='py-1 pl-2 text-lg'
              type="text"
              placeholder="Player Name"
              value={playerName}
              onChange={(e) => {setPlayerName(e.target.value)}}
      />
      <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
    </form>
  )
}

export default AddPlayerForm