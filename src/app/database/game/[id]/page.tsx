import React from 'react'

const Game = ({params}: {params : {id: string}}) => {
  return (
    <>
      <h1>Game</h1>
      <p>Game ID: {params.id}</p>
    </>
  )
}

export default Game