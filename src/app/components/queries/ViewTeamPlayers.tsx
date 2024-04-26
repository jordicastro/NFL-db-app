import React from 'react'
import { useState, FormEvent } from 'react'
import { toast } from 'react-toastify'
import Select from 'react-select';
import { nicknameToIdMap } from '@/app/util/TeamMap'
import SupabaseService from '@/app/services/supabaseService';



const options = Object.keys(nicknameToIdMap).map((key) => ({
  value: key,
  label: key,
}));

const ViewTeamPlayersForm = () => {
    const [teamName, setTeamName] = useState('1'); 
    const teamID = nicknameToIdMap[teamName];

    const onSubmitTeam = (e : FormEvent) => {
        e.preventDefault();
        console.log(`Selected Team: ${teamName}`)
        // toast
        toast.success(`Viewing all players on Team ${teamName}`);
        // redirect to ./database/team/[teamID], passing in the table
        return window.location.href = `/database/team/${teamID}`;
    };

  return (
    <form onSubmit={onSubmitTeam}>
        <h3 className='text-2xl font-bold text-black-500'>3. View all the players on a team </h3>
        <Select
          className="py-1 pl-2 text-lg"
          options={options}
          placeholder="Select Team"
          onChange={(e) => {
            if (e) {
              setTeamName(e.value);
            }
          }}
        />

        <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
    </form>
  )
}

export default ViewTeamPlayersForm