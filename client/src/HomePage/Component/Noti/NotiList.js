/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, useReducer } from "react";
import NotiForm from "./NotiForm";
import Noti from "./Noti";
import styled from "styled-components";
import axios from "axios";

const Noti_Form = styled.div`
  width: 50%;
  margin: auto;
  background-color: lightgray;
  min-height: 50vh;
  padding: 30px 0 30px 0;
  margin-top: 5vh;
  border-radius: 20px;
`;

const Noti_title = styled.h1`
  width: 80%;
  margin: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3);
  font-size: 5rem;
  text-align: center;
  font-weight: bold;
  color: #0b5592;
`;

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchNotiList() {
      await axios.get("http://localhost:5000/post").then((response) => {
        setTodos(response.data.getpost);
      });
    }
    fetchNotiList();
  }, []);

  const addTodo = (todo) => {
    if (!todo.content || /^\s*$/.test(todo.content)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = async (id, newValue) => {
    if (!newValue.content || /^\s*$/.test(newValue.content)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  const removeTodo = async (id) => {
    await axios.delete(`http://localhost:5000/post/delete/${id}`);
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };
  const role = props.role;
  if (role !== "student") {
    return (
      <Noti_Form>
        <Noti_title>THÔNG BÁO</Noti_title>
        <NotiForm onSubmit={addTodo} />
        <Noti
          role={role}
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </Noti_Form>
    );
  } else {
    return (
      <Noti_Form>
        <Noti_title>THÔNG BÁO</Noti_title>
        <Noti
          role={role}
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </Noti_Form>
    );
  }
}

export default TodoList;
