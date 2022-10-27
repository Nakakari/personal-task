import React from "react";
import Todo from "../todo/Todo";
import "./list.css";

const List = ({todos, setTodos}) => {
  
  const onDeleteHandler = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    
    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodoss = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodoss);
  };

    return (
        <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                    return (
                            <Todo 
                            todo = {todo}
                            setTodos = {setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onEditHandler={onEditHandler}
                            key={`todo-${todo.id}`}
                            />
                         );
                            }else {
                                return null;
                            }
                    })}
            </div>
            <h2 className="list-title">Done..! 🎉</h2>
            <div className="list-wrapper">
                 {todos.map((todo) => {
                    if (todo.isDone === true) {
                    return (
                        <Todo 
                        todo = {todo}
                        setTodos = {setTodos}  
                        onDeleteHandler={onDeleteHandler}
                        onEditHandler={onEditHandler}
                        key={`todo-${todo.id}`}/>
                    );
                    } else {
                      return null;
                    }
                })}
            </div>
        </div>
    );
}

export default List