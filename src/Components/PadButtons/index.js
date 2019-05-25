import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class PadButtons extends React.PureComponent {
  onNoteClick(note) {
    this.props.onSavedNote(note);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Dó')}
                  className="c3 container"
                >
                  Dó
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Dó#')}
                  className="csharp3 container"
                >
                  Dó#
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Ré')}
                  className="d3 container"
                >
                  Ré
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Ré#')}
                  className="dsharp3 container"
                >
                  Ré#
                </button>
              </th>
            </tr>
            <tr>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Mi')}
                  className="e3 container"
                >
                  Mi
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Fá')}
                  className="f3 container"
                >
                  Fá
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Fá#')}
                  className="fsharp3 container"
                >
                  Fá#
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Sol')}
                  className="g3 container"
                >
                  Sol
                </button>
              </th>
            </tr>
            <tr>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Sol#')}
                  className="gsharp3 container"
                >
                  Sol#
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Lá')}
                  className="a3 container"
                >
                  Lá
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Lá#')}
                  className="asharp3 container"
                >
                  Lá#
                </button>
              </th>
              <th className="square">
                <button
                  onClick={this.onNoteClick.bind(this, 'Si')}
                  className="b3 container"
                >
                  Si
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

PadButtons.propTypes = {
  onSavedNote: PropTypes.func
};
