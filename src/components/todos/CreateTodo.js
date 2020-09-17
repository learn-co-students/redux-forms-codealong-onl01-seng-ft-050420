import React, { Component } from 'react'
import {connect} from 'react-redux';

class CreateTodo extends Component {
  
    state ={
      text: '',
    };
  

handleSubmit = event =>{
  event.preventDefault();
  this.props.addTodo(this.state)
}

  //because we wrote it this way that means handleChange will always
  //be bound to the particular instance of the component that it is defined in
handleChange = event => {
  this.setState({
    text: event.target.value
  });
};

  render() {
    //debugger
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label>add todo </label>
            <input type="text" value = {this.state.text} onChange={event => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
        Create Todo Component
      </div>
    )
  }
}

//build our form here
//steps 1) updating the createTodo component's state
//whenever someone types something in
//2)user clicks submit then we grab that state and call
//store.dispatch with type and todo properties

//in the below function we need to use our dispatch method to take in an action
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
// export default connect()(CreateTodo);
//because provider is there in index.js it allows us to 
//connect our component with the component
//note: if not given any arguments connect will return dispatch as a prop