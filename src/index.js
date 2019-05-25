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
    }
  }

  onSavedNote(notePlayed) {
    console.log(notePlayed);
    //let newNoteQueue = this.state.notes;
    //newNoteQueue.push(notePlayed);
    //this.setState((state) => ({ notes: newNoteQueue}));
  }

  render() {
    return (
      <div className="App">
        <PadButtons onSavedNote={this.onSavedNote}/>
        <NoteQueue />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
