"use client";
import React from "react";
import { useState, FormEvent, useEffect } from "react";
import Card from "./Card";
import AddGameForm from "./queries/AddGame";
import AddPlayerForm from "./queries/AddPlayer";
import ViewTeamPlayersForm from "./queries/ViewTeamPlayers";
import ViewPlayersPositionForm from "./queries/ViewPlayersByPosition";
import ViewConferenceTeamsForm from "./queries/ViewConferenceTeams";
import ViewGamesByTeamForm from "./queries/ViewGamesByTeam";
import ViewGameByDate from "./queries/ViewGameByDate";

const QueryInputCards = () => {
  //     useEffect(() => {
  //         console.log(selectedConference); // This will log the new value of selectedTeam whenever it changes
  //       }, [selectedConference]);

  return (
    <div className="flex flex-wrap justify-around gap-8 p-4">
      <Card className={"w-1/3 m-4 p-2"}>
        <AddGameForm />
      </Card>

      <Card className={"w-1/3 m-4 p-2"}>
        <AddPlayerForm />
      </Card>

      <Card className={"w-1/3 m-4 p-2"}>
        <ViewTeamPlayersForm />
      </Card>

      <Card className={"w-1/3 m-4 p-2"}>
        <ViewPlayersPositionForm />
      </Card>

      <Card className={"w-1/3 m-4 p-2"}>
        <ViewConferenceTeamsForm />
      </Card>

      <Card className={"w-1/3 m-4 p-2"}>
        <ViewGamesByTeamForm />
      </Card>

      <Card className={"w-1/3 m-4 p-2"}>
        <ViewGameByDate />
      </Card>
    </div>
  );
};

export default QueryInputCards;
