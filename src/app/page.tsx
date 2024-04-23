import React from "react";
import Navbar from "./components/Navbar";
import QueryInputCards from "./components/QueryInputCards";
import { ToastContainer } from 'react-toastify' // successfully executed query, redirect to database page

const HomePage = () => {
  // const handleFormSubmit = () => {}

  return (
    <>
      <ToastContainer />
      <QueryInputCards />
    </>
  );
};

export default HomePage;
