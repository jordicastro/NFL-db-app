import React from 'react'

const Card = ({ children, props='bg-gray-100' }) => {
  return (
    <div className='{`${props} bg-gray-100 p-6 rounded-lg shadow-md`}'>{children}</div>
  )
}

export default Card