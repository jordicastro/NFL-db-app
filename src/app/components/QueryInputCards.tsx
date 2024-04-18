'use client';
import React from 'react'
import { useState, FormEvent, useEffect } from 'react'
import Card from './Card'

const addGame = (gameName : string) => {
        console.log(`adding game: ${gameName}`)
        // query to add game to game table
        
}

const addPlayer = (playerName : string) => {
        console.log(`adding player: ${playerName}`)
        // query to add player to player table

 }

 //...



const QueryInputCards = () => {
    const [gameName, setGameName] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('1'); // ['Team 1', 'Team 2', 'Team 3', 'Team 4']
    const [selectedPosition, setSelectedPosition] = useState('Quarterbacks'); // ['Quaterbacks', 'Running backs', 'Wide Receivers', 'Linebackers'
    const [selectedConference, setSelectedConference] = useState('American Football Conference (AFC)'); // ['American Football Conference (AFC)', 'National Football Conference (NFC)'
    const [selectedTeamGames, setSelectedTeamGames] = useState('49ers'); // ['49ers', 'Packers', 'Ravens', 'Steelers'
    const [gameDate, setGameDate] = useState(''); 

//     useEffect(() => {
//         console.log(selectedConference); // This will log the new value of selectedTeam whenever it changes
//       }, [selectedConference]);

    const onSubmitGame = (e : FormEvent) => {
        e.preventDefault();
        addGame(gameName);
        // query to add game to game table
    };
    const onSubmitPlayer = (e : FormEvent) => {
        e.preventDefault();
        addPlayer(playerName);
        // query to add player to player table
    };

    const onSelectedTeamChange = (e : FormEvent) => {
        const target = e.target as HTMLSelectElement;
        setSelectedTeam(target.value);
        // query to get all players on a team
    };

    const onSelectedPositionChange = (e : FormEvent) => {
        const target = e.target as HTMLSelectElement;
        setSelectedPosition(target.value);
        // query to get all players in a given position
    };

    const onSelectedConferenceChange = (e : FormEvent) => {
        const target = e.target as HTMLSelectElement;
        setSelectedConference(target.value);
        // query to get all teams in a conference
    };

    const onSelectedTeamGamesChange = (e : FormEvent) => {
        const target = e.target as HTMLSelectElement;
        setSelectedTeamGames(target.value);
        // query to get all games played by a team
    };

    const onSubmitDate = (e : FormEvent) => {
        e.preventDefault();
        console.log(`getting game info on date: ${gameDate}`)
        // query to get game info on a given date
    }

return (
    <div>
                <Card props={'w-1/3 p-2'} >
                        <form onSubmit={onSubmitGame}>
                                <h3 className='text-2xl font-bold text-black-500'>1. Add a game to the Game table</h3>
                                
                                <input className='py-1 pl-2 text-lg'
                                        type="text"
                                        placeholder="Game Name"
                                        value={gameName}
                                        onChange={(e) => {setGameName(e.target.value)}}
                                />
                                <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit" >Submit</button>
                        </form>
                        
                </Card>
                <Card>
                        <form onSubmit={onSubmitPlayer}>
                                <h3 className='text-2xl font-bold text-black-500'>2. Add a player to a player table </h3>
                                <input className='py-1 pl-2 text-lg'
                                        type="text"
                                        placeholder="Player Name"
                                        value={playerName}
                                        onChange={(e) => {setPlayerName(e.target.value)}}
                                />
                                <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
                        </form>
                        
                </Card>
                <Card>
                        <form>
                                <h3 className='text-2xl font-bold text-black-500'>3. View all the players on a team </h3>
                                <select className='py-1 pl-2 text-lg' value={selectedTeam} onChange={onSelectedTeamChange}>
                                        <option value="1">Team 1</option>
                                        <option value="2">Team 2</option>
                                        <option value="3">Team 3</option>
                                        <option value="4">Team 4</option>
                                </select>
                                <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
                        </form>
                        
                </Card>
                <Card>
                        <form>
                                <h3 className='text-2xl font-bold text-black-500'>4. View all the players in a position</h3>
                                <select className='py-1 pl-2 text-lg' value={selectedPosition} onChange={onSelectedPositionChange}>
                                        <option value="1">Quaterbacks</option>
                                        <option value="2">Running backs</option>
                                        <option value="3">Wide Receivers</option>
                                        <option value="4">Linebackers</option>
                                </select>
                                <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
                        </form>
                        
                </Card>
                <Card>
                        <form>
                                <h3 className='text-2xl font-bold text-black-500'>5. View all teams in a conference</h3>
                                <select className='py-1 pl-2 text-lg' value={selectedConference} onChange={onSelectedConferenceChange}>
                                        <option value="1">American Football Conference (AFC)</option>
                                        <option value="2">National Football Conference (NFC)</option>
                                </select>
                                <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
                        </form>
                        
                </Card>
                <Card>
                        <form>
                                <h3 className='text-2xl font-bold text-black-500'>6. View all games played by a team</h3>
                                <select className='py-1 pl-2 text-lg' value={selectedTeamGames} onChange={onSelectedTeamGamesChange}>
                                        <option value="1">49ers</option>
                                        <option value="2">Packers</option>
                                        <option value="3">Ravens</option>
                                        <option value="4">Steelers</option>
                                </select>
                                <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
                        </form>
                        
                </Card>
                <Card>
                        <form onSubmit={onSubmitDate}>
                                <h3 className='text-2xl font-bold text-black-500'>7. View game info on a given date</h3>
                                <input className='py-1 pl-2 text-lg'
                                        type="text"
                                        placeholder="Example: 2024-04-18"
                                        value={gameDate}
                                        onChange={(e) => {setGameDate(e.target.value)}}
                                />
                                <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
                        </form>
                        
                </Card>
    </div>
)
}

export default QueryInputCards