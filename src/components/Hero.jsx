import React from 'react'
import CountDown from './CountDown'

export default function Hero() {
  return (
    <div className="w-full h-screen mt-[100px] ml-2">
       <CountDown seconds={10} />
    </div>
  )
}