import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date(); // Current date
    targetDate.setDate(
      targetDate.getDate() + ((4 + 7 - targetDate.getDay()) % 7)
    ); // Next Thursday
    targetDate.setHours(0, 0, 0, 0); // 12 AM

    const difference = targetDate.getTime() - new Date().getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <p>
      {timeLeft.days.toString().padStart(2, '0')}:
      {timeLeft.hours.toString().padStart(2, '0')}:
      {timeLeft.minutes.toString().padStart(2, '0')}:
      {timeLeft.seconds.toString().padStart(2, '0')}
    </p>
  );
};

export default CountdownTimer;
