import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HotelList from './pages/HotelList';
import AddHotel from './pages/AddHotel';
import BookingPages from './pages/BookingPages';

import './index.css'; // Make sure file exists

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/add" element={<AddHotel />} />
        <Route path="/hotel/:id" element={<BookingPages />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
