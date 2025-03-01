import React, { forwardRef, useState } from 'react';

const BookYourTrip = forwardRef((props, ref) => {
  const [bookingData, setBookingData] = useState({
    destination: '',
    persons: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBookingData({
      ...bookingData,
      [id]: value
    });
  };

  const submitBooking = () => {
    console.log('Booking submitted:', bookingData);
    // Typically, you would send the data to a server here.
  };

  return (
    <section className="max-w-6xl mx-auto p-4 sm:p-6 my-10" ref={ref}>
      <div className="py-5 flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 mb-5">
          <img 
            src="brand-image.svg" 
            alt="Company Brand"
            className="w-full lg:h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-white p-6">
          <form id="bookingForm" className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Trip</h2>
            
            <div className="form-group">
              <label htmlFor="destination" className="block text-gray-700 mb-2">Where to:</label>
              <select 
                id="destination" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bookingData.destination}
                onChange={handleChange}
                required
              >
                <option value="">Select Destination</option>
                <option>Paris</option>
                <option>New York</option>
                <option>Tokyo</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="persons" className="block text-gray-700 mb-2">How Many Persons:</label>
              <input 
                type="number" 
                id="persons" 
                min="1" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bookingData.persons}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="startDate" className="block text-gray-700 mb-2">Start Date:</label>
                <input 
                  type="date" 
                  id="startDate" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-gray-700 mb-2">End Date:</label>
                <input 
                  type="date" 
                  id="endDate" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="description" className="block text-gray-700 mb-2">Description:</label>
              <textarea 
                id="description" 
                minLength="50" 
                maxLength="500" 
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bookingData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={submitBooking}
                className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default BookYourTrip;
