import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content ? this.props.content : '',
      name: this.props.name ? this.props.name : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this.state', this.props.getOrSetState);
    this.props.getOrSetState.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if(note._id === this.props.note._id) {
          note.content = this.state.content;
          note.name = this.state.name;
        }
        return note;
      }),
    }));
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form
        className="note-update-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="submit">update</button>
        <button type="button" onClick={this.props.toggleUpdate}>cancel</button>
      </form>
    );
  }
}

export default NoteUpdateForm;
