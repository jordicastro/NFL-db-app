import React from 'react'
import SupabaseService from "@/app/services/supabaseService"

// idea: either make query using url params [teamID] or pass in teamID as prop using Next.js router
const TeamPage = ({params} : {params: {id : string}}) => {
  const {viewPlayersFromTeam} = SupabaseService();
  const teamID = params.id;
  // query to get all players on a team with url param teamID
  const table = viewPlayersFromTeam(parseInt(teamID));
  // turn promise type into array
  
  console.log(`table: ${table}`);
  return (
    <>
        <h1>Team</h1>
        <p>Team ID: {params.id}</p>
        <div>
            <h2>Players</h2>
            <ul>
            </ul>
        </div>
    </>
  )
}

export default TeamPage