"use client";
import React from "react";
import { useState, useEffect } from "react";
// build time: getStaticProps, getStaticPaths,
// client side: useEffect, useState, getServerSideProps

const Database = () => {
  const [tables, setTables] = useState([]);

  // nothing in dependency array, so only runs once

  return (
    <>
      Database displaying Games, Players, and Teams tables
      {tables}
    </>
  );
};

export default Database;
