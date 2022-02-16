import Todo from '../models/todoModel';

// create todo
export async function createTodo(todoData) {
  try {
    const todo = await Todo.create(todoData);

    return {
      success: false,
      status: 404,
      message: 'Todo created.',
      data: todo,
    };
  } catch (error) {
    return {
      success: false,
      status: 404,
      message: 'Failed creating todo. Try again.',
      data: error.message,
    };
  }
}

// update todo
export async function updateTodo(todoData) {
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { id: todoData.id },
      { title: todoData.title }
    );

    return {
      success: true,
      status: 200,
      message: 'Todo updated.',
      data: updatedTodo,
    };
  } catch (error) {
    return {
      success: false,
      status: 404,
      message: 'Failed updating todo. Try again.',
      data: error.message,
    };
  }
}

// update todo
export async function updateTodoStatus(todoData) {
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { id: todoData.id },
      { status: todoData.status }
    );

    return {
      success: true,
      status: 200,
      message: 'Todo updated.',
      data: updatedTodo,
    };
  } catch (error) {
    return {
      success: false,
      status: 404,
      message: 'Failed updating todo. Try again.',
      data: error.message,
    };
  }
}

// delete todo
export async function deleteTodo(todoData) {
  try {
    const deletedTodo = await Todo.findOneAndDelete({ id: todoData.id });

    return {
      success: true,
      status: 200,
      message: 'Todo deleted.',
      data: deletedTodo,
    };
  } catch (error) {
    return {
      success: false,
      status: 404,
      message: 'Failed deleting todo. Try again.',
      data: error.message,
    };
  }
}
