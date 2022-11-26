import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='bg-cotton-candy rounded-full px-4 py-2 text-base font-medium text-dogwood-rose'>{children}</button>
  )
}

export default Button