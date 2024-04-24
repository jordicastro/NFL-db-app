"use client";
import Table from "@/app/components/Table";
import SupabaseService from "@/app/services/supabaseService";
import { Team } from "@/app/types/Team";
import React, { use, useEffect, useState } from "react";

const Teams = () => {

  const [teams, setTeams] = useState<Team[]>([]);
  const { getTable } = SupabaseService();

  useEffect( () => { 
    const fetchTeams = async () => {
      const teams = await getTable("team");
      setTeams(teams);
    };

    fetchTeams();
  }, []);



  return (
    <main className="flex justify-center mt-5">
      <Table contents={teams} title="Teams"></Table>
    </main>
  );
};

export default Teams