import React from 'react'
import { useState, FormEvent } from 'react'

const ViewConferenceTeamsForm = () => {
    const [selectedConference, setSelectedConference] = useState('American Football Conference (AFC)'); // ['American Football Conference (AFC)', 'National Football Conference (NFC)'

    const onSelectedConferenceChange = (e : FormEvent) => {
        const target = e.target as HTMLSelectElement;
        setSelectedConference(target.value);
        // query to get all teams in a conference
    };

  return (
    <form>
        <h3 className='text-2xl font-bold text-black-500'>5. View all teams in a conference</h3>
        <select className='py-1 pl-2 text-lg' value={selectedConference} onChange={onSelectedConferenceChange}>
                <option value="1">American Football Conference (AFC)</option>
                <option value="2">National Football Conference (NFC)</option>
        </select>
        <button className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700' type="submit">Submit</button>
    </form>
  )
}

export default ViewConferenceTeamsForm