"use client";
import Table from "@/app/components/Table";
import SupabaseService from "@/app/services/supabaseService";
import { Player } from "@/app/types/Player";
import React, { useEffect, useState } from "react";

const PlayersPage = ({params} : {params : {id: string}}) => {
    const {viewPlayersByPosition} = SupabaseService();
    const [players, setPlayers] = useState<Player[]>([]);
    const position: string = params.id;

    useEffect( () => {

        const fetchPlayers = async () => {
            const players: any = await viewPlayersByPosition(position);
            setPlayers(players);
        }
        fetchPlayers();
        console.log(players);
    }, []);
    return (
        <main className="flex justify-center mt-5">
            <Table contents={players} title={"Players"}></Table>
        </main>
    );
}

export default PlayersPage