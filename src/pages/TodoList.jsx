import React, { useState } from "react";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "테스트",
      body: "테스트입니다.",
      isDone: false,
    },
    {
      id: 2,
      title: "테스트2",
      body: "테스트2 입니다.",
      isDone: true,
    },
  ]);
  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
