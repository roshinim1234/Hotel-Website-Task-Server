import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [booking, setBooking] = useState({
    guestName: '',
    checkIn: '',
    checkOut: '',
    roomType: ''
  });

  useEffect(() => {
    axios.get(`mongodb+srv://admin:admin@cluster0.1g2uc.mongodb.net/hotelbooking?retryWrites=true&w=majority/hotels/${id}`)
      .then(res => setHotel(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleBooking = () => {
    alert(`Booked for ${booking.guestName}`);
    // Future: axios.post('/api/bookings', {...})
  };

  if (!hotel) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{hotel.name} - Booking</h2>
      <p><strong>Location:</strong> {hotel.location}</p>

      <input
        type="text"
        placeholder="Your Name"
        value={booking.guestName}
        onChange={(e) => setBooking({ ...booking, guestName: e.target.value })}
      />
      <input
        type="date"
        value={booking.checkIn}
        onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
      />
      <input
        type="date"
        value={booking.checkOut}
        onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
      />
      <select
        value={booking.roomType}
        onChange={(e) => setBooking({ ...booking, roomType: e.target.value })}
      >
        <option value="">Select Room Type</option>
        {hotel.rooms.map((r, i) => (
          <option key={i} value={r.type}>{r.type} - ₹{r.price}</option>
        ))}
      </select>

      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingPage;
