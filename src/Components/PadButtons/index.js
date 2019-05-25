import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function PadButton() {
  return (
    <div>
      <table>
        <tr>
          <th class="square">1</th>
          <th class="square">2</th>
          <th class="square blue">3</th>
          <th class="square">4</th>
        </tr>
        <tr>
          <th class="square">5</th>
          <th class="square">6</th>
          <th class="square">7</th>
          <th class="square">8</th>
        </tr>
        <tr>
          <th class="square">9</th>
          <th class="square">10</th>
          <th class="square">11</th>
          <th class="square">12</th>
        </tr>
        <tr>
          <th class="square">13</th>
          <th class="square">14</th>
          <th class="square">15</th>
          <th class="square">16</th>
        </tr>
      </table>
    </div>
  );
}
