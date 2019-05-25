import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function PadButton() {
  return (
    <div>
      <table>
        <tr>
          <th class="square c3">Dó</th>
          <th class="square csharp3">Dó#</th>
          <th class="square d3">Ré</th>
          <th class="square dsharp3">Ré#</th>
        </tr>
        <tr>
          <th class="square e3">Mi</th>
          <th class="square f3">Fá</th>
          <th class="square fsharp3">Fá#</th>
          <th class="square g3">Sol</th>
        </tr>
        <tr>
          <th class="square gsharp3">Sol#</th>
          <th class="square a3">Lá</th>
          <th class="square asharp3">Lá#</th>
          <th class="square b3">Si</th>
        </tr>
      </table>
    </div>
  );
}
