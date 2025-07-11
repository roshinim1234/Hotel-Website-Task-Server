import React, { useState } from 'react';
import axios from 'axios';

const AddHotel = () => {
  const [hotel, setHotel] = useState({ name: '', location: '', rooms: [] });
  const [room, setRoom] = useState({ type: '', price: '', isAvailable: true });

  const addRoom = () => {
    if (room.type && room.price) {
      setHotel({ ...hotel, rooms: [...hotel.rooms, room] });
      setRoom({ type: '', price: '', isAvailable: true });
    } else {
      alert("Please enter both room type and price.");
    }
  };

  const submitHotel = async () => {
    try {
      await axios.post('http://localhost:5000/api/hotels', hotel); // ✅ FIXED URL
      alert('Hotel added!');
      setHotel({ name: '', location: '', rooms: [] });
    } catch (error) {
      console.error('Error adding hotel:', error);
      alert('Error adding hotel. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Add Hotel</h2>

      <input
        type="text"
        placeholder="Hotel Name"
        value={hotel.name}
        onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={hotel.location}
        onChange={(e) => setHotel({ ...hotel, location: e.target.value })}
      />

      <h4>Add Room</h4>
      <input
        type="text"
        placeholder="Room Type"
        value={room.type}
        onChange={(e) => setRoom({ ...room, type: e.target.value })}
      />
      <input
        type="number"
        placeholder="Room Price"
        value={room.price}
        onChange={(e) => setRoom({ ...room, price: e.target.value })}
      />
      <button onClick={addRoom}>Add Room</button>

      <ul>
        {hotel.rooms.map((r, idx) => (
          <li key={idx}>{r.type} - ₹{r.price}</li>
        ))}
      </ul>

      <button onClick={submitHotel}>Submit Hotel</button>
    </div>
  );
};

export default AddHotel;
