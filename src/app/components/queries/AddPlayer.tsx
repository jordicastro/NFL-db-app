import React from 'react'
import { useState, FormEvent } from 'react'
import { toast } from 'react-toastify'

const AddPlayerForm = () => {
    const [playerName, setPlayerName] = useState('');

    const onSubmitPlayer = (e : FormEvent) => {
        e.preventDefault();
        toast.success(`Player ${playerName} added!`);
        // query to add player to player table
        //return window.location.href = '/database/player';
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