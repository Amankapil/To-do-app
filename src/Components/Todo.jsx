import React, { useState } from "react";

const Todo = ({ items }) => {
  const [todo, Settodo] = useState([]);
  const [input, Setinput] = useState();

  const handleadd = () => {
    if (input.trim() !== " ") {
      Settodo([
        ...todo,
        { id: todo.length + 1, text: input, completed: false },
      ]);

      Setinput(" ");
    }
  };

  const toggle = () => {
    Settodo([...todo]);
  };

  const remove = (id) => {
    Settodo(todo.filter((todof) => todof.id !== id));
  };

  const filteritem = items.filter((item) =>
    item.toLowercase().includes(input.toLowercase())
  );

  //   const search = () => {

  //   }
  return <div>Todo</div>;
};

export default Todo;
