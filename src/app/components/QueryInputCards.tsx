'use client';
import React from 'react'
import { useState, FormEvent, useEffect } from 'react'
import Card from './Card'
import AddGameForm from './AddGameForm'
import AddPlayerForm from './AddPlayerForm'
import ViewTeamPlayersForm from './ViewTeamPlayersForm';
import ViewPlayersPositionForm from './ViewPlayersPositionForm';
import ViewConferenceTeamsForm from './ViewConferenceTeamsForm';
import ViewGamesByTeamForm from './ViewGamesByTeamForm';
import ViewGameByDate from './ViewGameByDate';

const QueryInputCards = () => {

//     useEffect(() => {
//         console.log(selectedConference); // This will log the new value of selectedTeam whenever it changes
//       }, [selectedConference]);

return (
        
    <div className='flex flex-wrap justify-around'>
        <Card className={'w-1/3 m-4 p-2'} >
                <AddGameForm />
        </Card>

        <Card className={'w-1/3 m-4 p-2'}>
                <AddPlayerForm />
        </Card>

        <Card className={'w-1/3 m-4 p-2'}>
                <ViewTeamPlayersForm />
        </Card>

        <Card className={'w-1/3 m-4 p-2'}>
                <ViewPlayersPositionForm />  
        </Card>
        
        <Card className={'w-1/3 m-4 p-2'}>
                <ViewConferenceTeamsForm />
        </Card>

        <Card className={'w-1/3 m-4 p-2'}>
                <ViewGamesByTeamForm />
        </Card>

        <Card className={'w-1/3 m-4 p-2'}>
                <ViewGameByDate />
        </Card>
    </div>
);
}

export default QueryInputCards