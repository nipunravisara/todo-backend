import * as yup from 'yup';

export const createTodoSchema = yup.object().shape({
  title: yup.string().required({ message: 'Title is required.' }),
});

export const updateTodoSchema = yup.object().shape({
  id: yup.string().required({ message: 'Id is required.' }),
  title: yup.string().required({ message: 'Title is required.' }),
});

export const updateTodoStatusSchema = yup.object().shape({
  id: yup.string().required({ message: 'Id is required.' }),
  status: yup.string().required({ message: 'Status is required.' }),
});

export const deleteTodoSchema = yup.object().shape({
  id: yup.string().required({ message: 'Id is required.' }),
});

export const bar = 'bar';
