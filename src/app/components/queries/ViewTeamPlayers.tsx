import React from 'react'
import { useState, FormEvent } from 'react'

const ViewTeamPlayers = async (selectedTeam : string) => {
    // query to get all players on a team
    console.log(selectedTeam);

    const res = await fetch (`/api/team/${selectedTeam}`);
    const data = await res.json();
    // pass this data into database page
    console.log(data);
    return;
}

const ViewTeamPlayersForm = () => {
    const [selectedTeam, setSelectedTeam] = useState('1'); // ['Team 1', 'Team 2', 'Team 3', 'Team 4']

    const onSelectedTeamChange = (e : FormEvent) => {
        const target = e.target as HTMLSelectElement;

        setSelectedTeam(target.value);
        // query to get all players on a team
        ViewTeamPlayers(selectedTeam);
        // toast
        return;
    };

  return (
    <form>
        <h3 className='text-2xl font-bold text-black-500'>3. View all the players on a team </h3>
        <select className='py-1 pl-2 text-lg' value={selectedTeam} onChange={onSelectedTeamChange}>
                <option value="1">Team 1</option>
                <option value="2">Team 2</option>
                <option value="3">Team 3</option>
                <option value="4">Team 4</option>
        </select>
        <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
    </form>
  )
}

export default ViewTeamPlayersForm