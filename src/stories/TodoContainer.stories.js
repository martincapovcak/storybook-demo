import React from 'react';

import TodoContainer from '../TodoContainer.js';

export default {
  title: 'TodoContainer',
  component: TodoContainer
};

export const NormalTodoContainer = () => (
  <TodoContainer todos={ ["Learn REACT", "Take dogs out", "Go for a food"] }/>
);
