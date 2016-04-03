import React, {Component, PropTypes} from 'react'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
  }

  select(e) {
    e.preventDefault();
    this.props.onSelect();
  }

  render() {
    let {onSelect, onDelete, completed, text} = this.props;
    return(
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <a href="#" onClick={this.select}>{text}</a>
        <button onClick={onDelete}>Delete!</button>
      </li>
    )
  };
}

Todo.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo
