import React from 'react'
import "./TodoINT.css"
import { Link } from 'react-router-dom'

export default function TodoINT() {
  return (
    <>
      <div className="todo-container">

        <div className="todo-card">
          <h1>Todo List</h1>
          <h2>Objective</h2>
          <p>
            To create a simple todo list application using React that allows users 
            to add, delete, and mark tasks as completed.
          </p>
          <p>Get code on GitHub</p>

          <div className='Button-container'>
            <button className='btn1'>Get Code</button>
            <Link to="/view-todo">
            
            <button className='btn2'>Project View</button>
          </Link>
          </div>
        </div>

      </div>
    </>
  )
}