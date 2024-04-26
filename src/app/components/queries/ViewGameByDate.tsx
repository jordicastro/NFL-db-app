import React from 'react'
import { useState, FormEvent } from 'react'
const ViewGameByDate = () => {
    const [date, setDate] = useState(new Date());

    const onSubmitDate = (e : FormEvent) => {
      e.preventDefault();
      console.log(`getting game info on date: ${date.toISOString().substring(0, 10)}`);
      
      // redirect to ./database/game/[date], passing in the table
      return window.location.href = `/database/game/date/${date.toISOString().substring(0, 10)}`;

    };

  return (
    <form onSubmit={onSubmitDate}>
        <h3 className='text-2xl font-bold text-black-500'>7. View game info on a given date</h3>
        <input
        className="block border border-grey-light w-full p-3 rounded mb-4"
        type="date"
        placeholder="Date"
        value={date.toISOString().substring(0, 10)}
        onChange={(e) => {
          const newDate = new Date(e.target.value);
          if (!isNaN(newDate.getTime())) {
            setDate(newDate);
          }
        }}
        />
        <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
    </form>
  )
}

export default ViewGameByDate