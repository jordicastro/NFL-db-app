'use client';
import React from 'react'
import { useState } from 'react'


const QueryInputCards = () => {
    const [gameName, setGameName] = useState('')
return (
    <div>
            <div>QueryInputCards</div>
            <form>
                    <h3>1. Add a game to the Game table</h3>
                    <input 
                            type="text"
                            placeholder="Game Name"
                            value={gameName}
                            onChange={(e) => {setGameName(e.target.value)}}
                    />
                    <button type="submit">Submit</button>
            </form>
    </div>
)
}

export default QueryInputCards