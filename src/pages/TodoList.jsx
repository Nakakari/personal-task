import { useState } from "react"
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Header from "../components/header/Header";

const TodoList = () => {
    const[todos, setTodos] = useState([
        {id: 1, body:'Halo', title:'Uhuy', isDone:false},
        {id: 2, body:'Halo2', title:'Uhuy2', isDone:true}
    ]);

    return (
        <Layout>
            <Header />
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    )
}

export default TodoList;