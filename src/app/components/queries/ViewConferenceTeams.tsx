import React from "react";
import { useState, FormEvent } from "react";
import Select from "react-select";

const ViewConferenceTeamsForm = () => {
  const [selectedConference, setSelectedConference] = useState(
    "American Football Conference (AFC)"
  ); // ['American Football Conference (AFC)', 'National Football Conference (NFC)'

  const options = [
    { value: "AFC", label: "American Football Conference (AFC)" },
    { value: "NFC", label: "National Football Conference (NFC)" },
  ];

  const onSubmitConferenceTeam = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Conference: ${selectedConference}`);

    return (window.location.href = `/database/team/conference/${selectedConference}`);
  };

  return (
    <form onSubmit={onSubmitConferenceTeam}>
      <h3 className="text-2xl font-bold text-black-500">
        5. View all teams in a conference
      </h3>
      <Select
        className="py-1 text-lg"
        options={options}
        placeholder="Conference"
        onChange={(e) => {
          if (e) {
            setSelectedConference(e.value);
          }
        }}
      />
      <button
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ViewConferenceTeamsForm;
