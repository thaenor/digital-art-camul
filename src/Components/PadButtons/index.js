import React from "react";
import PropTypes from "prop-types";
import MIDISounds from "midi-sounds-react";

import "./styles.css";

//https://surikov.github.io/midi-sounds-react/

export default class PadButtons extends React.PureComponent {
  onNoteClick(noteName) {
    const pitch = this.getPlayedSound(noteName);
    this.props.onSavedNote({ noteName, pitch });
    // playChordNow( instrument, pitches, duration)
    this.midiSounds.playChordNow(3, [pitch], 0.5);
  }

  getPlayedSound(note) {
    switch (note) {
      case "Dó":
        return 60;
      case "Dó#":
        return 61;
      case "Ré":
        return 62;
      case "Ré#":
        return 63;
      case "Mi":
        return 64;
      case "Fá":
        return 65;
      case "Fá#":
        return 66;
      case "Sol":
        return 67;
      case "Sol#":
        return 68;
      case "Lá":
        return 69;
      case "Lá#":
        return 70;
      case "Si":
        return 71;
      default:
        return 60;
    }
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Dó")}
                  className="c3 container"
                >
                  Dó
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Dó#")}
                  className="csharp3 container"
                >
                  Dó#
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Ré")}
                  className="d3 container"
                >
                  Ré
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Ré#")}
                  className="dsharp3 container"
                >
                  Ré#
                </button>
              </th>
            </tr>
            <tr>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Mi")}
                  className="e3 container"
                >
                  Mi
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Fá")}
                  className="f3 container"
                >
                  Fá
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Fá#")}
                  className="fsharp3 container"
                >
                  Fá#
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Sol")}
                  className="g3 container"
                >
                  Sol
                </button>
              </th>
            </tr>
            <tr>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Sol#")}
                  className="gsharp3 container"
                >
                  Sol#
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Lá")}
                  className="a3 container"
                >
                  Lá
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Lá#")}
                  className="asharp3 container"
                >
                  Lá#
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, "Si")}
                  className="b3 container"
                >
                  Si
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        <MIDISounds
          ref={ref => (this.midiSounds = ref)}
          appElementName="root"
          instruments={[3]}
        />
      </div>
    );
  }
}

PadButtons.propTypes = {
  onSavedNote: PropTypes.func
};
