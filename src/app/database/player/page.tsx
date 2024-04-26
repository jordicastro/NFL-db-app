"use client";
import Table from "@/app/components/Table";
import SupabaseService from "@/app/services/supabaseService";
import { Player } from "@/app/types/Player";
import React, { useEffect, useState } from "react";

const Players = () => {

  const [players, setPlayers] = useState<Player[]>([]);
  const { getTable } = SupabaseService();

  useEffect( () => {

    const fetchPlayers = async () => {
      const players = await getTable("player");
      setPlayers(players);
    };

    fetchPlayers();
  }, []);

  return (
    <main className="flex justify-center mt-5">
      <Table contents={players} title="Players"></Table>
    </main>
  );
};

export default Players;
