"use client";
import React from "react";
import { useEffect, useState } from "react";
import SupabaseService from "@/app/services/supabaseService";
import { Team } from "@/app/types/Team";
import Table from "@/app/components/Table";

const ConferencePage = ({ params }: { params: { id: string } }) => {
  const { viewTeamsByConference } = SupabaseService();
  const [teams, setTeams] = useState<Team[]>([]);
  const conference: string = params.id;

  useEffect(() => {
    const fetchTeams = async () => {
      const teams: any = await viewTeamsByConference(conference);
      setTeams(teams);
    };

    fetchTeams();
  }, []);

  return (
    <main className="flex justify-center mt-5">
      <Table
        contents={teams}
        title={"Teams sorted by conference and wins"}
      ></Table>
    </main>
  );
};

export default ConferencePage;
