import React from 'react';

import TodoList from '../components/todo-list/index.jsx';

export default {
    title: 'Example/TodoList',
    component: TodoList,
};

const Template = (args) => <TodoList {...args} />;

export const Primary = Template;
