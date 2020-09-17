export default function manageTodo(state = {
  todos: [
    {text: 'buy grocieres'},
    {text: 'watch netflix'},
  ],
}, action) {
//define our actions here in our reducer
switch (action.type) {
  case 'ADD_TODO':

  console.log({ todos: state.todos.concat(action.payload.text) });
  return {todos: state.todos.concat(action.payload.text)};

  default:
    return state;
}
  
}
