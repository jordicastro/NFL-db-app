import React from "react";
import { useState, FormEvent } from "react";
import positionOptions from "@/app/util/PositionMap";
import Select from "react-select";
import SupabaseService from "@/app/services/supabaseService";

const ViewPlayersPositionForm = () => {
  const [selectedPosition, setSelectedPosition] = useState("Quarterbacks"); // ['Quaterbacks', 'Running backs', 'Wide Receivers', 'Linebackers'
  const { viewPlayersByPosition } = SupabaseService();

  const onSubmitPlayerPosition = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Position: ${selectedPosition}`);

    return (window.location.href = `/database/player/${selectedPosition}`);
  };

  return (
    <form onSubmit={onSubmitPlayerPosition}>
      <h3 className="text-2xl font-bold text-black-500">
        4. View all the players in a position
      </h3>
      <Select
        className="py-1 text-lg"
        options={positionOptions}
        placeholder="Position"
        onChange={(e) => {
          if (e) {
            setSelectedPosition(e.value);
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

export default ViewPlayersPositionForm;
