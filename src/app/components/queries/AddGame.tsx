import SupabaseService from "@/app/services/supabaseService";
import Select from "react-select";
import React from "react";
import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { Game } from "@/app/types/Game";
import { nicknameToIdMap } from "@/app/util/TeamMap";
// import { useRouter } from 'next/router'


const options = Object.keys(nicknameToIdMap).map((key) => ({
  value: key,
  label: key,
}));

const AddGameForm = () => {
  const { addItem } = SupabaseService();

  const [awayTeamName, setAwayTeamName] = useState("");
  const [homeTeamName, setHomeTeamName] = useState("");
  const [awayTeamScore, setAwayTeamScore] = useState('AwayTeamScore');
  const [homeTeamScore, setHomeTeamScore] = useState('HomeTeamScore');
  const [date, setDate] = useState(new Date())


  const onSubmitGame = async (e: FormEvent) => {
    e.preventDefault();
    console.log(`Away Game Name: ${awayTeamName}`);
    const awayGameID = nicknameToIdMap[awayTeamName];
    const homeGameID = nicknameToIdMap[homeTeamName];

    const newGame =
      {
        awayTeamId: awayGameID,
        homeTeamId: homeGameID,
        awayTeamScore: parseInt(awayTeamScore),
        homeTeamScore: parseInt(homeTeamScore),
        date: date,
      };

    console.log(`Game: ${newGame?.date}`);
    addItem("game", newGame as Game)
    toast.success(`Game added!`);
    // return redirect to ./database/game
    // return (window.location.href = "/database/game");
  };

  return (
    <form onSubmit={onSubmitGame}>
      <h3 className="text-2xl font-bold text-black-500">
        1. Add a game to the Game table
      </h3>
      <Select
        className="py-1 pl-2 text-lg"
        options={options}
        placeholder="Select Away Team"
        onChange={(e) => {
          if (e) {
            setAwayTeamName(e.value);
          }
        }}
      />
      <Select
        className="py-1 pl-2 text-lg"
        options={options}
        placeholder="Select Home Team"
        onChange={(e) => {
          if (e) {
            setHomeTeamName(e.value);
          }
        }}
      />
      <input
        className="block border border-grey-light w-full p-3 rounded mb-4"
        type="number"
        placeholder="Away Team Score"
        value={awayTeamScore}
        onChange={(e) => setAwayTeamScore(e.target.value)}
      />
      <input
        className="block border border-grey-light w-full p-3 rounded mb-4"
        type="number"
        placeholder="Home Team Score"
        value={homeTeamScore}
        onChange={(e) => setHomeTeamScore(e.target.value)}
        />
      <input
        className="block border border-grey-light w-full p-3 rounded mb-4"
        type="date"
        placeholder="Date"
        value={date.toISOString().substring(0, 10)}
        onChange={(e) => {
          const newDate = new Date(e.target.value);
          if (!isNaN(newDate.getTime())) {
            setDate(newDate);
          }
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
