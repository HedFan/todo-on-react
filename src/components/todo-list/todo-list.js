import React from 'react'

import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ({todos, onDeleted}) => {
    const getElements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
        <li className='list-group-item todo-list-item' key={id}>
            <ToDoListItem {...itemProps}
                          onDeleted = {() => onDeleted(id)}
            // label={item.label}
            // important={item.important}
             />
        </li>
        )
    });
    return (
        <ul className='todo-list list-group'>
            {getElements}
        </ul>
    );
};

export default ToDoList;