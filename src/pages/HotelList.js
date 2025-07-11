import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';
import hom3 from '../images/hom3.jpg';



const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hotels')
      .then(res => setHotels(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">🏨 HotelBooking</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Hotel</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     <div id="carouselExample" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={home1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={home2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={hom3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>

      {/* ✅ Hotel Listings */}
      <div className="container">
        <h2 className="text-center mb-4">Available Hotels</h2>
        <div className="row">
          {hotels.map((hotel) => (
            <div className="col-md-4 mb-4" key={hotel._id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text"><strong>Location:</strong> {hotel.location}</p>
                  <p className="card-text"><strong>Rooms:</strong></p>
                  <ul>
                    {hotel.rooms.map((room, i) => (
                      <li key={i}>{room.type} - ₹{room.price}</li>
                    ))}
                  </ul>
                  <Link to={`/hotel/${hotel._id}`} className="btn btn-primary mt-2">Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
