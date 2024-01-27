'use client'
import BarChart from "./BarChart"
import { useEffect, useRef, useState } from "react"
import { monthlyData } from "@/app/data"

const SalesTrend = () => {
  const elementRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const newHeight = entries[0].target.offsetHeight;
      setElementHeight(newHeight);
      console.log({ newHeight });
    });

    // Start observing the element
    observer.observe(elementRef.current);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, [elementRef]);

  return (
    <div className="lg:w-[62.2%] bg-white rounded-[14px] border border-slate-100 px-5 py-4 h-96 lg:h-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold leading-relaxed text-zinc-800">Sales Trends</h5>
        <div>
          <p className="text-sm font-medium leading-snug text-gray-700">Short by : </p>
        </div>
      </div>
      <div className="flex h-full gap-3 lg:gap-6">
        <div className="w-[47px] h-[80%] opacity-60 flex-col justify-between flex text-xs font-semibold leading-none text-neutral-600">
          <p>60.000</p>
          <p>50.000</p>
          <p>40.000</p>
          <p>30.000</p>
          <p>20.000</p>
          <p>10.000</p>
          <p>0</p>
        </div>
        <div className="w-full h-[80%] flex items-end justify-between" ref={elementRef}>
          {
            monthlyData.map((data, index) => (
              <div  key={index} className="relative">
                <BarChart price={data.value} elementHeight={elementHeight} />
                <p className="absolute text-[8px] -bottom-5 text-neutral-600 md:text-sm md:font-semibold">{data.month}</p>
              </div>
              
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SalesTrend