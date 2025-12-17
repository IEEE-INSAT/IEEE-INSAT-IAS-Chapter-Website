import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-02-14T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <h2 className="countdown-ended">The bootcamp has started 🎉</h2>;
  }

  return (
    <div className="countdown">
      <div><span>{timeLeft.days}</span> Days</div>
      <div><span>{timeLeft.hours}</span> Hours</div>
      <div><span>{timeLeft.minutes}</span> Minutes</div>
      <div><span>{timeLeft.seconds}</span> Seconds</div>
    </div>
  );
}

