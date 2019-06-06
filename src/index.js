import React from "react";
import ReactDOM from "react-dom";
import PadButtons from "./Components/PadButtons";
import NoteQueue from "./Components/NoteQueue";
import { init } from "./Components/fabric/graphics";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      isRecording: false
    };
    this.onSavedNote = this.onSavedNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    init();
  }

  onSavedNote(notePlayed) {
    if (this.state.isRecording) {
      let newNoteQueue = this.state.notes;
      newNoteQueue.push(notePlayed);
      this.setState(state => ({ notes: newNoteQueue }));
    }
    //TODO: play sound
  }

  removeNote() {
    this.setState(state => ({ notes: state.notes.slice(1), isRecording: false }));
  }

  onRecordBtnPress() {
    this.setState((state, props) => ({
      isRecording: !state.isRecording
    }));
  }

  render() {
    return (
      <div className="App">
        <PadButtons onSavedNote={this.onSavedNote} />
        <NoteQueue
          noteList={this.state.notes}
          removeNote={this.removeNote.bind(this)}
          onRecordPress={this.onRecordBtnPress.bind(this)}
          isRecording={this.state.isRecording}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
