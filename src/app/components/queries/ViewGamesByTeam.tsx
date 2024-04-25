import React from 'react'
import { useState, FormEvent } from 'react'
import Select from "react-select";
import { nicknameToIdMap, nicknameToAbbrMap } from '@/app/util/TeamMap';

const options = Object.keys(nicknameToIdMap).map((key) => ({
    value: key,
    label: key,
}));
const ViewGamesByTeamForm = () => {
    const [selectedTeamGames, setSelectedTeamGames] = useState('49ers'); // ['49ers', 'Packers', 'Ravens', 'Steelers'
    // const teamAbr = nicknameToAbbrMap[selectedTeamGames];
    const teamID = nicknameToIdMap[selectedTeamGames];

    const onSubmitTeam = (e : FormEvent) => {
        e.preventDefault();
        console.log(`Selected Team: ${selectedTeamGames}: ${teamID}`);
        return window.location.href = `/database/game/${teamID}`;
    };

    return (
        <form onSubmit={onSubmitTeam}>
            <h3 className='text-2xl font-bold text-black-500'>6. View all games played by a team</h3>
            <Select
                className="py-1 pl-2 text-lg"
                options={options}
                placeholder="Select Team"
                onChange={(e) => {
                    if (e) {
                        setSelectedTeamGames(e.value);
                    }
                }}
            />
            <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
        </form>
  )
}

export default ViewGamesByTeamForm