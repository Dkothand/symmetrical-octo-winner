import React from 'react';
import NewForm from './components/NewForm'

const baseURL = 'http://localhost:3003'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this.handleAddNote = this.handleAddNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.renderNotes = this.renderNotes.bind(this)
  }
  componentDidMount() {
    this.renderNotes()
  }
  handleAddNote(note) {
    const copyNotes = [note, ...this.state.notes]
    this.setState({
      notes: copyNotes
    })
  }
  deleteNote(id) {
    fetch(baseURL + '/notes/' + id, {
      method: 'DELETE'
    }).then(res => {
      const findIndex = this.state.notes.findIndex(note => note._id === id)
      const copyNotes = [...this.state.notes]
      copyNotes.splice(findIndex, 1)
      this.setState({notes: copyNotes})
    })
  }
  renderNotes() {
    //fetch notes from backend
    fetch(baseURL + '/notes')
    .then(data => data.json())
    .then(parsedData => this.setState({notes: parsedData}), err => console.log(err))
  }
  render() {
    return (
      <div className="container">
        <h1>Note Taker</h1>
        <NewForm handleAddNote={this.handleAddNote}/>
        <table>
          <tbody>
            {
              this.state.notes.map(note => {
                return (
                  <tr key={note._id}>
                    <td>
                      {note.title}
                    </td>
                    {/* add onClick={() => this.deleteNote(note._id)},
                    wait until create form is up and running */}
                    <td onClick={() => this.deleteNote(note._id)}>X</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
