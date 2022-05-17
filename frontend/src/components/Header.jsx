import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
        <h2>Deportes</h2>
        <div className="menu">
            <Link to="/new">New Player</Link>
        </div>
    </div>
  )
}
