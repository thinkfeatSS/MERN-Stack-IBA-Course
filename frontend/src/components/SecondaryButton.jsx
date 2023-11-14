import React from 'react'

function SecondaryButton({text}) {
  return (
    <button className='text-base font-bold py-2 px-4 bg-transparent border-2 border-fuchsia-700 rounded-xl text-fuchsia-700 hover:shadow-2xl hover:shadow-black'>{text}</button>
  )
}

export default SecondaryButton