'use client'
import { useState, useEffect } from "react"

const BarChart = ({price, elementHeight}) => {
    const [barHeight, setBarHeight] = useState(0)
    
    useEffect(() => {
        const newHeight = (elementHeight * price)/60
        console.log({newHeight})
        setBarHeight(newHeight)
        
    }, [price, elementHeight])

  return (
    <div className={`md:w-[30px] w-3 transition-all duration-500 ease-in-out bg-emerald-400 bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px] mt-auto hover:bg-gradient-to-b from-emerald-400 via-emerald-100 to-emerald-50`} style={{height: `${barHeight}px`}}>

    </div>
  )
}

export default BarChart