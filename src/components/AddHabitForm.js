import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleHabitNameChange = (e) => {
    setHabitName(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName); 
      setHabitName(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Habit</h3>

      <input
        type="text"
        placeholder="Enter habit name"
        value={habitName}
        onChange={handleHabitNameChange}
      />

      <button type="submit">Add Habit</button>
    </form>
  );
}
