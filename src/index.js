import React from 'react';
import ReactDOM from 'react-dom';
import PadButtons from './Components/PadButtons';
import NoteQueue from './Components/NoteQueue';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.onSavedNote = this.onSavedNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  onSavedNote(notePlayed) {
    let newNoteQueue = this.state.notes;
    newNoteQueue.push(notePlayed);
    this.setState(state => ({ notes: newNoteQueue }));
  }

  removeNote() {
    this.setState(state => ({ notes: [] }));
  }

  render() {
    return (
      <div className="App">
        <PadButtons onSavedNote={this.onSavedNote} />
        <NoteQueue
          noteList={this.state.notes}
          removeNote={this.removeNote.bind(this)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
