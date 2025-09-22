import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch hotels from backend
    useEffect(() => {
        axios.get('http://localhost:9091/hotels')
            .then(response => {
                setHotels(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching hotels:', err);
                setError('Failed to load hotels');
                setLoading(false);
            });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        alert('Search functionality coming soon!');
    };

    return (
        <div className="home-container">
            <header className="app-header">
                <h1>Welcome to Hotel Booker</h1>
                <p>Find your next stay with us</p>
            </header>

            <main>
                <section className="search-section">
                    <h2>Find a Hotel</h2>
                    <form className="search-form" onSubmit={handleSearch}>
                        <div className="form-group">
                            <label>Destination</label>
                            <input type="text" placeholder="e.g., New Delhi" required />
                        </div>
                        <div className="form-group">
                            <label>Check-in</label>
                            <input type="date" required />
                        </div>
                        <div className="form-group">
                            <label>Check-out</label>
                            <input type="date" required />
                        </div>
                        <div className="form-group">
                            <label>Guests</label>
                            <input type="number" min="1" defaultValue="1" required />
                        </div>
                        <button type="submit" className="search-button">Search</button>
                    </form>
                </section>

                <section className="hotel-list-section">
                    <h2>Available Hotels</h2>

                    {loading && <p>Loading hotels...</p>}
                    {error && <p className="error-message">{error}</p>}

                    <div className="hotel-list">
                        {hotels.map(hotel => (
                            <div key={hotel.id} className="hotel-card">
                                <img
                                    src={hotel.imageUrl || 'https://via.placeholder.com/400x200'}
                                    alt={hotel.name}
                                    className="hotel-image"
                                />
                                <div className="hotel-details">
                                    <h3>{hotel.name}</h3>
                                    <p>{hotel.location}</p>
                                    <p className="hotel-price">₹{hotel.price.toLocaleString('en-IN')} / night</p>
                                    <button className="book-button">Book Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;