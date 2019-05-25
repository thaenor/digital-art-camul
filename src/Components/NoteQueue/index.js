import React from "react";

import "./styles.css";

export default function PadButton() {
  return (
    <div>
        <button className="playBtn">
            Play
        </button>
        <ul className="noteQueue">
            <li className="note">
                F
            </li>
            <li className="note">
                A
            </li>
            <li className="note">
                G
            </li>
            <li className="note">
                E
            </li>
        </ul>
    </div>
  );
}
