import React from 'react';
import PropTypes from 'prop-types';
import MIDISounds from 'midi-sounds-react';

import './styles.css';

export default class NoteQueue extends React.PureComponent {
  playRecordedNotes() {
    if (this.props.noteList.length >= 0) {
      const time = 500;
      const interval = 250;
      
      this.convertNoteFormat(this.props.noteList);

      this.props.noteList.forEach((note, index) => {
        const clock = time + interval * index;
        setTimeout(() => {
          this.midiSounds.playChordNow(3, [note.pitch], 0.5);
          this.props.removeNote();
        }, clock);
      });
    }
  }

  convertNoteFormat(noteList){
    let noteString = "";
    noteList.forEach((note, index) => {
      switch(note.noteName){
        case 'Dó':
          noteString += 'C5';
          break;
        case 'Dó#':
          noteString += 'CS';
          break;
        case 'Ré':
          noteString += 'D5';
          break;
        case 'Ré#':
          noteString += 'DS';
          break;
        case 'Mi':
          noteString += 'E5';
          break;
        case 'Fá':
          noteString += 'F4';
          break;
        case 'Fá#':
          noteString += 'FS';
          break;
        case 'Sol':
          noteString += 'G4';
          break;
        case 'Sol#':
          noteString += 'GS';
          break;
        case 'Lá':
          noteString += 'A4';
          break;
        case 'Lá#':
          noteString += 'AS';
          break;
        case 'Si':
          noteString += 'B4';
          break;
        default:
          break;
      }
    });
    return noteString;
  }

  toggleRecordBtn() {
    this.props.onRecordPress();
  }

  render() {
    const recordClasses = this.props.isRecording
      ? 'recordBtn recording'
      : 'recordBtn';
    const listOfNotes = this.props.noteList.map((e, i) => {
      let noteColor;
      switch (e.noteName) {
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
          <button className={noteColor}>{e.noteName}</button>
        </li>
      );
    });
    return (
      <>
        <div className="noteQueueContainer">
          <button
            className={recordClasses}
            onClick={this.toggleRecordBtn.bind(this)}
          >
            <i className="fas fa-microphone-alt" />
          </button>
          <button
            className="playBtn"
            onClick={this.playRecordedNotes.bind(this)}
          >
            <i className="fas fa-play-circle" />
          </button>
          <ul className="noteQueue">{listOfNotes}</ul>
        </div>
        <MIDISounds
          ref={ref => (this.midiSounds = ref)}
          appElementName="root"
          instruments={[3]}
        />
      </>
    );
  }
}

NoteQueue.propTypes = {
  onSavedNote: PropTypes.func
};
