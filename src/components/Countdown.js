import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(targetDate) - new Date();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      className="countdown"
      animate={{ scale: [1, 1.05, 1]  }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes 
    </motion.div>
  );
}
