import React from 'react'
import { useState, FormEvent } from 'react'
const ViewGameByDate = () => {
    const [gameDate, setGameDate] = useState(''); 

    const onSubmitDate = (e : FormEvent) => {
        e.preventDefault();
        console.log(`getting game info on date: ${gameDate}`)
        // query to get game info on a given date
    };

  return (
    <form onSubmit={onSubmitDate}>
        <h3 className='text-2xl font-bold text-black-500'>7. View game info on a given date</h3>
        <input className='py-1 pl-2 text-lg'
                type="text"
                placeholder="Example: 2024-04-18"
                value={gameDate}
                onChange={(e) => {setGameDate(e.target.value)}}
        />
        <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
    </form>
  )
}

export default ViewGameByDate