import React, { useState } from "react";

function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleChange = (e) => {
    setHabitName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHabit(habitName);
    setHabitName(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Habit"
        value={habitName}
        onChange={handleChange}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default AddHabitForm;
