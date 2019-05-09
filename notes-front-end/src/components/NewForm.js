import React from 'react'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

class NewForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    fetch(baseURL + '/notes', {
      method: 'POST',
      body: JSON.stringify({title: this.state.title}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then (res => res.json())
      .then (resJson => {
        this.props.handleAddNote(resJson)
        this.setState({
          title: ''
        })
    }).catch (error => console.error({'Error': error}))
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title"></label>
        <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title} placeholder="add a title"/>
        <input type="submit" value="Add A Note"/>
      </form>
    )
  }
}

export default NewForm
