import React from 'react'

const Button = ({text,style, id}) => {
  return (
    <button id={id} style={style}>{text}</button>
  )
}

export default Button