import React from 'react'
import { useState, FormEvent } from 'react'

const ViewGamesByTeamForm = () => {
    const [selectedTeamGames, setSelectedTeamGames] = useState('49ers'); // ['49ers', 'Packers', 'Ravens', 'Steelers'

    const onSelectedTeamGamesChange = (e : FormEvent) => {
        const target = e.target as HTMLSelectElement;
        setSelectedTeamGames(target.value);
        // query to get all games played by a team
    };

    return (
        <form>
            <h3 className='text-2xl font-bold text-black-500'>6. View all games played by a team</h3>
            <select className='py-1 pl-2 text-lg' value={selectedTeamGames} onChange={onSelectedTeamGamesChange}>
                    <option value="1">49ers</option>
                    <option value="2">Packers</option>
                    <option value="3">Ravens</option>
                    <option value="4">Steelers</option>
            </select>
            <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
        </form>
  )
}

export default ViewGamesByTeamForm