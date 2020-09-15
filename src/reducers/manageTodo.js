export default function manageTodo(
  state = {
    todos: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_TODO":
      console.log("in reducer");
      return {
        todos: state.todos.concat(action.payload.text),
      };
    default:
      return state;
  }
}
