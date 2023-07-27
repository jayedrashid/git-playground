import { useState, useEffect, useRef } from 'react'

export default function CountDown({seconds}) {
    const [countdown, setCountdown] = useState(seconds);
    const timerId = useRef();

    useEffect(()=>{
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timerId.current)
    }, [])

    useEffect(()=>{
        if (countdown < 1) {
            clearInterval(timerId.current)
            alert("The Time Has Come!")
        }
    }, [countdown])

  return (
    <div>
        <h1>CountDown: {countdown}</h1>
    </div>
  )
}
