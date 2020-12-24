import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    // if(this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.completed ? 'line-through': 'none'
    }
  }
  
  markComplete = (e) => {
    console.log(this.props)
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete} /> {' '}
          { this.props.todo.title }
        </p>
      </div>
    )
  }
}

// // PropTypes
// TodoItem.propTypes = {
//   todos: PropTypes.array.isRequired
// }


export default TodoItem;
