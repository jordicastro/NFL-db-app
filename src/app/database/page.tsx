"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Game } from "@/app/types/Game";
import { Player } from "@/app/types/Player";
import { Team } from "@/app/types/Team";
import Table from "@/app/components/Table";
import SupabaseService from "@/app/services/supabaseService";


const Database = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  const { getTable } = SupabaseService();

  useEffect( () => {
    const fetchGames = async () => {
      const games = await getTable("game");
      setGames(games);
    };

    const fetchPlayers = async () => {
      const players = await getTable("player");
      setPlayers(players);
    };

    const fetchTeams = async () => {
      const teams = await getTable("team");
      setTeams(teams);
    };

    fetchGames();
    fetchPlayers();
    fetchTeams();

  })

  return (
    <>
      <div className="flex justify-center mt-5">
        <Table contents={games} title="Games"></Table>
      </div>
      <div className="flex justify-center mt-5">
        <Table contents={players} title="Players"></Table>
      </div>
      <div className="flex justify-center mt-5">
        <Table contents={teams} title="Teams"></Table>
      </div>
    </>
  );
};

export default Database;
