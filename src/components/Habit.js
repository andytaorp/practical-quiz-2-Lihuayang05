import React from "react";

export default function Habit({ habit, onToggle, onDelete }) {
  const completedStyle = {
    textDecoration: "line-through",
  };

  return (
    <li>
      <span style={habit.completed ? completedStyle : {}}>{habit.name}</span>
      
      <button onClick={() => onToggle(habit.id)}>
        {habit.completed ? "Mark as Not Completed" : "Mark as Completed"}
      </button>
      
      {habit.completed && (
        <button onClick={() => onDelete(habit.id)}>Delete</button>
      )}
    </li>
  );
}
