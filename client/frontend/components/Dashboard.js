import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:5000/api/workouts/USER_ID");
      setWorkouts(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Workout History</h2>
      <ul>
        {workouts.map((w) => (
          <li key={w._id}>{w.exercise} - {w.duration} mins</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
