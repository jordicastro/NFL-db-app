import { createClient } from "@supabase/supabase-js";
import { Game } from "../types/Game";
import { Player } from "../types/Player";

//
const SUPABASE_URL = "https://wjaeqzloacpfephrdkke.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqYWVxemxvYWNwZmVwaHJka2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNzU1NTAsImV4cCI6MjAyODk1MTU1MH0.cBnwyiYEouqTt11sL27xebGk4Ucm7HsB_3odBmEUzPQ";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

enum TableNames {
  GAME = "Game",
  PLAYER = "Player",
  TEAM = "Team",
}

const useSupabase = () => {
  const getTable = async (tableName: string) => {
    const { data, error } = await supabase.from(tableName).select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  const addItem = async (tableName: TableNames, item: Game | Player) => {
    const { data, error } = await supabase.from(tableName).insert([item]);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  const viewPlayersFromTeam = async (teamId: number) => {
    const { data, error } = await supabase
      .from(TableNames.PLAYER)
      .select("*")
      .eq("teamId", teamId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  return { getTable, addItem };
};

export default useSupabase;
