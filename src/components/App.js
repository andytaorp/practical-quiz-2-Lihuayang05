import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    if (!habitName.trim()) return;
    const newHabit = {
      id: Date.now(),
      name: habitName.trim(),
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  const handleToggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const handleDeleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAddHabit={handleAddHabit} />
      <HabitList
        habits={habits}
        onToggle={handleToggleHabit}
        onDelete={handleDeleteHabit}
      />
    </div>
  );
}

export default App;
