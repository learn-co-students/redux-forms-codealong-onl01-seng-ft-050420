import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super(); 
    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(e) => this.handleChange(e)} />
          </p>
          <input type="submit" onSubmit={(e) => this.handleSubmit(e)} />
        </form>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
