import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this.renderNotes = this.renderNotes.bind(this)
  }
  componentDidMount() {
    this.renderNotes()
  }
  renderNotes() {
    //fetch notes from backend
    fetch('http://localhost:3003/notes')
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
