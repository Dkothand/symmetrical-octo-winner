import React from 'react';

const baseURL = 'http://localhost:3003/notes'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this.deleteNote = this.deleteNote.bind(this)
    this.renderNotes = this.renderNotes.bind(this)
  }
  componentDidMount() {
    this.renderNotes()
  }
  deleteNote(id) {
    fetch(baseURL + '/holidays/' + id, {
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
    fetch(baseURL)
    .then(data => data.json())
    .then(parsedData => this.setState({notes: parsedData}), err => console.log(err))
  }
  render() {
    return (
      <div className="container">
        <h1>Note Taker</h1>
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
                    <td>X</td>
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
