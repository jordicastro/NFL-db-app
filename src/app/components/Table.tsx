"use client";

import React, { useEffect, useState } from "react";
import { Game } from "../types/Game";
import { Player } from "../types/Player";
import { Team } from "../types/Team";

interface TableProps {
  contents: Game[] | Player[] | Team[] | any[];
  title: string;
  extraColumn?: boolean;
}

const Table = ({ contents, title, extraColumn }: TableProps) => {
  return (
    <table className="table-auto flex-col border-stone-800 border bg-slate-200">
      <caption className="justify-start self-start font-bold text-2xl table-caption">
        {title}
      </caption>
      <thead className="border-stone-800 border">
        <tr className="border-stone-800 border">
          {contents.length > 0 &&
            Object.keys(contents[0]).map((key) => (
              <>
                {typeof contents[0][key] === "object" ? (
                  Object.keys(contents[0][key]).map((k) => (
                    <th className="pr-4" key={k}>
                      {`${key} ${k}`}
                    </th>
                  ))
                ) : (
                  <th className="pr-4" key={key}>
                    {key}
                  </th>
                )}
              </>
            ))}
          {extraColumn && <th className="pr-4">Winner</th>}
        </tr>
      </thead>
      <tbody>
        {contents.map((content) => (
          <tr key={content.id}>
            {Object.values(content).map((value) => (
              <>
                {typeof value === "object" && value != null ? (
                  Object.values(value).map((v) => (
                    <td className="pr-4" key={v}>
                      {v}
                    </td>
                  ))
                ) : (
                  <td className="pr-4" key={content.id}>
                    {value as React.ReactNode}
                  </td>
                )}
              </>
            ))}
            {extraColumn && (
              <td className="pr-4">
                {content.awayTeamScore > content.homeTeamScore
                  ? content.awayTeamId
                  : content.homeTeamId}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
