import React, { useEffect, useState } from "react";

const BookingAlert = ({ onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs w-full flex items-stretch">
    <div className="bg-emerald-400 w-2 rounded-l-lg"></div>
    <div className="w-full p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
      <p className="text-gray-700 mb-2">Your booking has been successfully completed.</p>
      <p className="text-gray-600 text-sm">
        This message will close in <span className="font-bold">{secondsLeft}</span> seconds...
      </p>
    </div>
  </div>
</div>

  );
};

export default BookingAlert;
