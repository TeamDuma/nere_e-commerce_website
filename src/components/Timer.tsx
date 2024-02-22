import React, { useEffect, useState } from 'react';

const Timer: React.FC = () => {
  const [timer, setTimer] = useState(5 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          return prevTimer;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className='flex flex-row items-center justify-center space-x-1 text-center text-sm font-medium text-gray-500'>
      <p>
        Timer: {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};

export default Timer;
