export const addTodo = (payload) => (
	{
		type: "APP/ADD_TODO",
		payload: payload
	}
)

export const deleteTodo = (index) => (
	{
		type: "APP/REMOVE_TODO",
		payload: index,		
	}
)

export const editTodo = (payload) => (
	{
		type: "APP/EDIT_TODO",
		payload: payload,		
	}
)