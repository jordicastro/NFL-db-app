"use client";
import React, { useState, useEffect } from 'react'
import SupabaseService from '@/app/services/supabaseService'
import { Game } from '@/app/types/Game'
import Table from '@/app/components/Table'
import { idToNicknameMap } from '@/app/util/TeamMap';


const GamesPage = ({params}: {params : {id: string}}) => {
  const { viewGamesByTeam } = SupabaseService();
  const [games, setGames] = useState<Game[]>([]);
  const title: string = idToNicknameMap[parseInt(params.id)];

  useEffect( () => {
    const fetchGames = async() => {
      const games: any = await viewGamesByTeam(parseInt(params.id));
      setGames(games);
    };

    fetchGames();
  },[]);


  return (
    <main className="flex justify-center mt-5">
      <Table contents={games} title={title + " Games"}></Table>
    </main>
  );
}

export default GamesPage