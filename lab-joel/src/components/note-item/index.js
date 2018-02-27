import React from 'react';
import {renderIf} from '../../lib/utils';
import Modal from '../../modal/index';
import NoteUpdateForm from '../note-update-form/index';

class NoteItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name ? this.props.name : '',
      content: this.props.content ? this.props.content : '',
      update: false,
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.setState({update: !this.state.update});
  }



  render() {
    return(
      <div
        className="note-item"
        onDoubleClick={() => this.setState({update:true})}>


        {renderIf(this.state.update,
          <Modal close={() => this.setState({update: !this.state.update})}>
            <NoteUpdateForm
              note={this.props.note}
              getOrSetState={this.props.getOrSetState}
              name={this.props.name}
              content={this.props.content}
              toggleUpdate={this.handleUpdate}
              setState={(prevState) => this.setState({
                name: prevState.name,
                content: prevState.content,
              })}/>
          </Modal>

        )}
        <h2>{this.props.note.name}</h2>
        <p>{this.props.note.content}</p>
        <button id={this.props.note._id} onClick={this.props.handleRemoveNote}>DELETE</button>
      </div>
    );
  }
}

export default NoteItem;
