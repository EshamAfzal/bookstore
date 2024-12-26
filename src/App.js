import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">Book Haven</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="cart">
          <a href="#cart">Cart (0)</a>
        </div>
      </header>

      <section id="home" className="hero">
        <h1>Welcome to Book Haven</h1>
        <p>Your one-stop shop for the best books in town</p>
        <a href="#books" className="btn">Shop Now</a>
      </section>

      <section id="books" className="books-section">
        <h2>Our Collection</h2>
        <div className="books-container">
          <div className="book-card">
            <img src="book1.jpg" alt="Book 1" />
            <h3>Book Title 1</h3>
            <p>Author: John Doe</p>
            <p>Price: $10</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="book-card">
            <img src="book2.jpg" alt="Book 2" />
            <h3>Book Title 2</h3>
            <p>Author: Jane Smith</p>
            <p>Price: $15</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* Additional book cards can be added here */}
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>At Book Haven, we are passionate about books and aim to connect readers with the literature they love. From bestsellers to timeless classics, we have something for everyone.</p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Book Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
