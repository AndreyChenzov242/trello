import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../services/todo/TodoInterface';

export const makeTodo = (text: string): ITodo => {
  return { id: uuidv4(), text: text };
};
