import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className="jumbotron">
        <h1>Hello, How are you?</h1>
        <p> A good App</p>
        <Link to="about" className="btn btn-primary btn-lg">
            About
        </Link>
    </div>
);

export default HomePage;