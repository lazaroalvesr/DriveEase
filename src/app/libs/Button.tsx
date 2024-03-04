import React from 'react'
import { ButtonProps } from './Interfaces/ButtonProps'

function Button({ WLG, text ,WMB }: ButtonProps) {
  return (
    <div>
      <button className={`bg-gray-800 text-gray-50 lg:w-${WLG} w-${WMB} py-4 rounded-xl`}>{text}</button>
    </div>
  )
}

export default Button