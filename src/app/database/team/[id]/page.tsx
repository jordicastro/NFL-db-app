import React from 'react'

const Team = ({params} : {params: {id : string}}) => {
  return (
    <>
        <h1>Team</h1>
        <p>Team ID: {params.id}</p>
    </>
  )
}

export default Team