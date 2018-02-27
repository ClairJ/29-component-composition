import React from 'react';

class NoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      completed: false,
      name: '',
      content: '',
    };
    // ================
    // Binding Handlers
    // ================

    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  // ===============
  // Member Function
  // ===============
  handleSubmit(e){
    e.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState({
      completed: false,
      name: '',
      content: '',
    });
  }

  handleChange(event){
    let {name,value} = event.target;

    this.setState({
      [name]: value,
      created: true,
    });
  }

  // ===============
  // Lifecycle Hooks
  // ===============
  render(){
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='title'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='content'
          placeholder='description'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'> create note </button>
      </form>
    );
  }
}

export default NoteForm;
