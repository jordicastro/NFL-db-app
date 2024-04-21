import React from 'react'

const Player = ({params} : {params : {id: string}}) => {
  return (
    <>
        <h1>Player</h1>
        <p>Player ID: {params.id}</p>
    </>
  )
}

export default Player