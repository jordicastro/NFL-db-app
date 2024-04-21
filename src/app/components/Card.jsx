import React from 'react'

const Card = ({ children, className}) => {
  return (
    <div className='{`${className} bg-gray-100 p-6 rounded-lg shadow-md `}`'>{children}</div>
  );
}

export default Card