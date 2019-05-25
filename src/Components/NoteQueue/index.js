import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class NoteQueue extends React.PureComponent {
  playRecordedNotes() {
    console.log(this.props.noteList);
    this.props.removeNote();
  }

  render() {
    const listOfNotes = this.props.noteList.map((e, i) => {
      let noteColor;
      switch (e) {
        case 'Dó':
          noteColor = 'c3';
          break;
        case 'Dó#':
          noteColor = 'csharp3';
          break;
        case 'Ré':
          noteColor = 'd3';
          break;
        case 'Ré#':
          noteColor = 'dsharp3';
          break;
        case 'Mi':
          noteColor = 'e3';
          break;
        case 'Fá':
          noteColor = 'f3';
          break;
        case 'Fá#':
          noteColor = 'fsharp3';
          break;
        case 'Sol':
          noteColor = 'g3';
          break;
        case 'Sol#':
          noteColor = 'gsharp3';
          break;
        case 'Lá':
          noteColor = 'a3';
          break;
        case 'Lá#':
          noteColor = 'asharp3';
          break;
        case 'Si':
          noteColor = 'b3';
          break;
        default:
          break;
      }
      noteColor = `container ${noteColor}`;

      return (
        <li key={i} className="note">
          <button className={noteColor}>{e}</button>
        </li>
      );
    });
    return (
      <div className="noteQueueContainer">
        <button className="playBtn" onClick={this.playRecordedNotes.bind(this)}>
          <i className="fas fa-play-circle" />
        </button>
        <ul className="noteQueue">{listOfNotes}</ul>
      </div>
    );
  }
}

NoteQueue.propTypes = {
  onSavedNote: PropTypes.func
};
