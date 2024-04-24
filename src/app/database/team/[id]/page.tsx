"use client";
import React, { useEffect, useState } from 'react'
import SupabaseService from "@/app/services/supabaseService"
import { Team } from "@/app/types/Team"
import Table from "@/app/components/Table"
import {idToNicknameMap} from '@/app/util/TeamMap';

// idea: either make query using url params [teamID] or pass in teamID as prop using Next.js router
const TeamPage = ({params} : {params: {id : string}}) => {
  const {viewPlayersFromTeam} = SupabaseService();
  const [team, setTeam] = useState<Team[]>([]);
  const teamID: number = parseInt(params.id);
  const teamName = idToNicknameMap[teamID];
  useEffect( () => {

    const fetchTeam = async () => {
      const team: any = await viewPlayersFromTeam(teamID);
      setTeam(team);
    }
    fetchTeam();
  })
    
    
  
  return (
    <main className="flex justify-center mt-5">
        <Table contents={team} title={teamName}></Table>
    </main>
  );
}

export default TeamPage