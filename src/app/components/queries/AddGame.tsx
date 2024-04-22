import useSupabase from "@/app/services/supabaseService";
import React from "react";
import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { Player } from "@/app/types/Player";
import { Team } from "@/app/types/Team";
// import { useRouter } from 'next/router'

const addGame = async (gameName: string) => {
  console.log(`adding game: ${gameName}`);
  const res = await fetch("/api/game", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameName }),
  });
  return;
};

const AddGameForm = () => {
  const [gameName, setGameName] = useState("");
  const onSubmitGame = async (e: FormEvent) => {
    e.preventDefault();
    addGame(gameName);
    toast.success(`Game ${gameName} added!`);
    // return redirect to ./database/game
    return (window.location.href = "/database/game");
  };

  return (
    <form onSubmit={onSubmitGame}>
      <h3 className="text-2xl font-bold text-black-500">
        1. Add a game to the Game table
      </h3>

      <input
        className="py-1 pl-2 text-lg"
        type="text"
        placeholder="Game Name"
        value={gameName}
        onChange={(e) => {
          setGameName(e.target.value);
        }}
      />
      <button
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AddGameForm;
