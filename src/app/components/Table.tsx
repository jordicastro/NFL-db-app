"use client";

import React, { useEffect, useState } from "react";
import { Game } from "../types/Game";
import { Player } from "../types/Player";
import { Team } from "../types/Team";

interface TableProps {
  contents: Game[] | Player[] | Team[];
}

const Table = ({ contents }: TableProps) => {
  const [header, setHeader] = useState<string>("LOADING...");

  const getHeader = (contents: Game[] | Player[] | Team[]): string => {
    if ((contents as Game[])[0]) {
      return "Game";
    } else if ((contents as Player[])[0]) {
      return "Player";
    } else if ((contents as Team[])[0]) {
      return "Team";
    }
    return ""; // Default case
  };

  useEffect(() => {
    setHeader(getHeader(contents));
  }, [contents]);

  return (
    <table className="table-auto flex-col border-stone-800 border">
      <caption className="justify-start self-start font-bold text-2xl table-caption">
        {header}
      </caption>
      <thead className="border-stone-800 border">
        <tr className="border-stone-800 border">
          {contents.length > 0 &&
            Object.keys(contents[0]).map((key) => (
              <th className="pr-4" key={key}>
                {key}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {contents.map((content) => (
          <tr key={content.id}>
            {Object.values(content).map((value) => (
              <td className="border-stone-800 border" key={value}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
