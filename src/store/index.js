import {createStore} from 'redux';

const initialState = {
	todos: [
		{text: "Test Task"},
	]
};
const reducer = (state=initialState, action) => {

	if(action.type === 'APP/ADD_TODO') {
		const todos = [...state.todos];
		todos.push({text: action.payload});
		state.todos = todos;
		return {...state};
	}

	if(action.type === 'APP/EDIT_TODO') {
		const todos = [...state.todos];
		console.log(action.payload)
		todos[action.payload.index] = {text: action.payload.text};
		state.todos = todos;
		console.log(state.todos)
		return {...state};
	}

	return state;
}


export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());