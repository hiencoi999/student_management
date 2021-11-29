/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import NotiForm from "./NotiForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styled from "styled-components";

const Noti_element = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  background-color: #0c67b3;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 8rem;
  box-sizing: border-box;
  border-radius: 20px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #0b5592;
    cursor: pointer;
  }
`;
const Noti_content = styled.div`
  width: 90%;
  color: white;
`;
const Noti_icon = styled.div`
  width: 5rem;
  height: 2rem;
  margin-top: auto;
  margin-bottom: auto;
  float: right;
`;
const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <NotiForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Noti_element className="todo-row" key={index}>
      <Noti_content key={todo.id}>{todo.content}</Noti_content>
      <Noti_icon className="icons">
        <RiCloseCircleLine
          style={{ width: "2rem", height: "2rem", color: "white" }}
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          style={{ width: "2rem", height: "2rem", color: "white" }}
          onClick={() => setEdit({ id: todo.id, value: todo.content })}
          className="edit-icon"
        />
      </Noti_icon>
    </Noti_element>
  ));
};

export default Todo;
