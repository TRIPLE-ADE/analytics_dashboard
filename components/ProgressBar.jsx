'use client'
import { useEffect, useState } from 'react';

const ProgressBar = ({ percentage, color }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth(percentage);
  }, [percentage]);

  return (
    <div className="w-full overflow-hidden h-3 bg-neutral-100 rounded-[40px]">
      <div
        className={`h-full transition-all duration-500 ease-in-out ${color} rounded-[40px]`}
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
