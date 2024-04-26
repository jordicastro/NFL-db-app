"use client";
import React, { useState, useEffect } from 'react';
import SupabaseService from '@/app/services/supabaseService';
import { Game } from '@/app/types/Game';
import Table from '@/app/components/Table';


const DatePage = ({params}: {params: {id: string}}) => {
    const { viewGamesByDate } = SupabaseService();
    const [games, setGames] = useState<Game[]>([]);
    const date = params.id;

    useEffect( () => {

        const fetchGames = async () => {
            const games = await viewGamesByDate(date);
            setGames(games);
        }

        fetchGames();
    }, [])


    return (
        <main className="flex justify-center mt-5">
            <Table contents={games} title={`Games on ${date}`}></Table>
        </main>
    );
}

export default DatePage