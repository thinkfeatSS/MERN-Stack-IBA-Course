import React from 'react'

function PrimaryButton({text}) {
  return (
    <button className='text-base py-2 px-4 bg-fuchsia-700 text-white rounded-xl font-bold hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-black  hover:border-2 hover:border-fuchsia-700 active:bg-fuchsia-700 active:text-white'>{text}</button>
  )
}

export default PrimaryButton