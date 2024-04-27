import React from "react";
import { useState, FormEvent } from "react";
import Select from "react-select";

const ViewConferenceTeamsForm = () => {
  const onSubmitConferenceTeam = (e: FormEvent) => {
    e.preventDefault();

    return (window.location.href = `/database/team/conference/`);
  };

  return (
    <form className="text-center" onSubmit={onSubmitConferenceTeam}>
      <h3 className="text-2xl font-bold text-black-500">
        5. View teams by conference
      </h3>
      <button
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        type="submit"
      >
        View
      </button>
    </form>
  );
};

export default ViewConferenceTeamsForm;
