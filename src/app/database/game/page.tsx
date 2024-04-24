"use client";

import Table from "@/app/components/Table";
import SupabaseService from "@/app/services/supabaseService";
import { Game } from "@/app/types/Game";
import React, { useEffect, useState } from "react";

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const { getTable } = SupabaseService();

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getTable("game");
      setGames(games);
    };
    fetchGames();
  }, []);

  return (
    <main className="flex justify-center mt-5">
      <Table contents={games} title="Game"></Table>
    </main>
  );
};

export default Games;
