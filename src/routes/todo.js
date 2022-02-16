import express from 'express';
import {
  updateTodoStatus,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todoController';
import validateRequest from '../middleware/validateRequest';
import {
  createTodoSchema,
  deleteTodoSchema,
  updateTodoSchema,
  updateTodoStatusSchema,
} from '../schemas/todoSchema';

const router = express.Router();

// create todo
router.post(
  '/create',
  validateRequest({ schema: createTodoSchema }),
  async (req, res) => {
    const todoData = req.body;

    const response = await createTodo(todoData);

    if (response.success === true) {
      return res.status(response.status).json(response);
    }

    return res.status(response.status).json(response);
  }
);

// update todo
router.put(
  '/update',
  validateRequest({ schema: updateTodoSchema }),
  async (req, res) => {
    const todoData = req.body;

    const response = await updateTodo(todoData);

    if (response.success === true) {
      return res.status(response.status).json(response);
    }

    return res.status(response.status).json(response);
  }
);

// update todo
router.put(
  '/change-status',
  validateRequest({ schema: updateTodoStatusSchema }),
  async (req, res) => {
    const todoData = req.body;

    const response = await updateTodoStatus(todoData);

    if (response.success === true) {
      return res.status(response.status).json(response);
    }

    return res.status(response.status).json(response);
  }
);

// delete todo
router.delete(
  '/delete',
  validateRequest({ schema: deleteTodoSchema }),
  async (req, res) => {
    const todoData = req.body;

    const response = await deleteTodo(todoData);

    if (response.success === true) {
      return res.status(response.status).json(response);
    }

    return res.status(response.status).json(response);
  }
);

export default router;
