"use client";
import { useEffect, useState } from "react";

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate time left for the flash sale
  const calculateTimeLeft = () => {
    const difference =
      new Date("2024-04-25T00:00:00").getTime() - new Date().getTime();
    const hours = Math.floor(difference / 1000 / 3600); // Convert milliseconds to hours
    const minutes = Math.floor((difference / 1000 / 60) % 60); // Convert remaining milliseconds to minutes
    const seconds = Math.floor((difference / 1000) % 60); // Convert remaining milliseconds to seconds
    setTimeLeft({ hours, minutes, seconds });
  };

  useEffect(() => {
    // Update time left every second
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="font-bold text-center text-2xl">Offer Time Left</h1>
      <div className="mt-2 mb-12 text-center flex justify-center gap-x-2">
        <span className="bg-black p-2 rounded text-white text-xl">
          {timeLeft.hours} HRS
        </span>
        <div className="text-4xl font-extrabold">:</div>
        <span className="bg-black p-2 rounded text-white text-xl">
          {" "}
          {timeLeft.minutes} MIN
        </span>
        <div className="text-4xl font-extrabold">:</div>
        <span className="bg-black p-2 rounded text-white text-xl">
          {" "}
          {timeLeft.seconds} SEC
        </span>{" "}
      </div>
    </div>
  );
};

export default Counter;
