import React from 'react'
import { useState, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { Player } from '@/app/types/Player'
import Select from "react-select";
import nicknameToIdMap from "@/app/util/TeamMap"
import SupabaseService from "@/app/services/supabaseService";;

const positionOptions = [
  { value: 'QB', label: 'Quarterback' },
  { value: 'OL', label: 'Offensive Line' },
  { value: 'RB', label: 'Running Back' },
  { value: 'FB', label: 'Fullback'},
  { value: 'TE', label: 'Tight End' },
  { value: 'WR', label: 'Wide Receiver' },
  { value: 'DL', label: 'Defensive Line' },
  { value: 'LB', label: 'Linebacker' },
  { value: 'CB', label: 'Cornerback' },
  { value: 'S', label: 'Safety' },
  { value: 'K', label: 'Kicker' },
  { value: 'P', label: 'Punter' },
  { value: 'KR', label: 'Kick Returner' },
  { value: 'PR', label: 'Punt Returner' },
  { value: 'LS', label: 'Long Snapper' },
];

const teamOptions = Object.keys(nicknameToIdMap).map((key) => ({
  value: key,
  label: key,
}));

const AddPlayerForm = () => {
    const { addItem } = SupabaseService();
    const [playerName, setPlayerName] = useState('');
    const [position, setPosition] = useState('');
    const [teamName, setTeamName] = useState('');
    const teamID = nicknameToIdMap[teamName];

    const newPlayer = {
        name: playerName,
        position: position,
        teamID: teamID,
    }

    const onSubmitPlayer = (e : FormEvent) => {
        e.preventDefault();
        console.log(`Player Name: ${newPlayer.name}`);
        // query to add player to player table
        addItem('player', newPlayer as Player);
        toast.success(`Player ${playerName} added!`);
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
      <Select
        className="py-1 pl-2 text-lg"
        options={positionOptions}
        placeholder="Position"
        onChange={(e) => {
          if (e) {
            setPosition(e.value);
          }
        }}
      />
      <Select
        className="py-1 pl-2 text-lg"
        options={teamOptions}
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

export default AddPlayerForm