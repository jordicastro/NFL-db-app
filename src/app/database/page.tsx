'use client';
import React from 'react'
import { useState, useEffect } from 'react'
// build time: getStaticProps, getStaticPaths,
// client side: useEffect, useState, getServerSideProps



const Database = () => {

  const [tables, setTables] = useState([])

  useEffect( () => {
    const fetchTables = async () => {
      try {
        const res = await fetch('/api/tables');
        const data = await res.json();
        setTables(data);
      } catch (error) {
        console.error(`Error fetching tables: ${error}`)
      }
    }
    fetchTables();
  }, []);
  // nothing in dependency array, so only runs once

  return (
    <>
      Database displaying Games, Players, and Teams tables
      {tables}
    </>
  )
}

export default Database