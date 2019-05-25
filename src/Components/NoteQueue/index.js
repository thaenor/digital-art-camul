import React from 'react';

import './styles.css';

export default function PadButton() {
  return (
    <div className="noteQueueContainer">
      <button className="playBtn"><i className="fas fa-play-circle"></i></button>
      <ul className="noteQueue">
        <li className="note">
          <button className="container">F</button>
        </li>
        <li className="note">
          <button className="container">A</button>
        </li>
        <li className="note">
          <button className="container">G</button>
        </li>
        <li className="note">
          <button className="container">E</button>
        </li>
      </ul>
    </div>
  );
}
