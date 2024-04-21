import React from 'react'
import { useState, FormEvent } from 'react'

const ViewPlayersPositionForm = () => {
    const [selectedPosition, setSelectedPosition] = useState('Quarterbacks'); // ['Quaterbacks', 'Running backs', 'Wide Receivers', 'Linebackers'

    const onSelectedPositionChange = (e : FormEvent) => {
        const target = e.target as HTMLSelectElement;
        setSelectedPosition(target.value);
        // query to get all players in a given position
    };

    return (
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
    )
}

export default ViewPlayersPositionForm