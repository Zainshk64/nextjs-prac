'use client'
import React from 'react'

const ServerComp = () => {
  return (
    <div onClick={()=>alert('hello client component')} >ServerComp</div>
  )
}

export default ServerComp