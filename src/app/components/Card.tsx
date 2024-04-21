import React from 'react'

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className='{`${className} bg-gray-100 p-6 rounded-lg shadow-md `}`'>{children}</div>
  );
}

export default Card