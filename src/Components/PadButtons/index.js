import React from 'react';

import './styles.css';

export default function PadButton() {
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <th className="square">
            <button className="c3 container">Dó</button>
          </th>
          <th className="square">
            <button className="csharp3 container">Dó#</button>
          </th>
          <th className="square">
            <button className="d3 container">Ré</button>
          </th>
          <th className="square">
            <button className="dsharp3 container">Ré#</button>
          </th>
        </tr>
        <tr>
          <th className="square">
            <button className="e3 container">Mi</button>
          </th>
          <th className="square">
            <button className="f3 container">Fá</button>
          </th>
          <th className="square">
            <button className="fsharp3 container">Fá#</button>
          </th>
          <th className="square">
            <button className="g3 container">Sol</button>
          </th>
        </tr>
        <tr>
          <th className="square">
            <button className="gsharp3 container">Sol#</button>
          </th>
          <th className="square">
            <button className="a3 container">Lá</button>
          </th>
          <th className="square">
            <button className="asharp3 container">Lá#</button>
          </th>
          <th className="square">
            <button className="b3 container">Si</button>
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
