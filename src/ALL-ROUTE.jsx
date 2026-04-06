import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Youtube from "./Other-Resources/Youtub.jsx";
import Nodejs from "./Backend/Nodejs/Nodejs.jsx";
import TodoList from "./components/Project-Interface/TodoINT.jsx";
import ViewTodo from "./All-Projects/React-Projects/Todo-list-P-1/Todo.jsx";
export default function AllRoute() {
  return (
    <>
         <Routes>
      <Route path="/" element={<Home />} />       
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/nodejs" element={<Nodejs />} />
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/view-todo" element={<ViewTodo />} />
      {/* <Route path="/Layout-nodejs" element={<Nodejs />} /> */}
    </Routes>
    </>
      );  
}