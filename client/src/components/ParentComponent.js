import React from "react";
import { Outlet, Link } from "react-router-dom";
const ParentComponent = () => {
  return (
    <div className="min-h-screen bg-white-100 text-black">
        <ul className="flex space-x-6 text-lg font-semibold text-white-700">
          <li><Link to="/workout-plans">Workout Plans</Link></li>
          <li><Link to="/workout-plans/strength-training">Strength Training</Link></li>
          <li><Link to="/workout-plans/cardio-workouts">Cardio Workouts</Link></li>
          <li><Link to="/workout-plans/yoga-routine">Yoga</Link></li>
          <li><Link to="/workout-plans/full-body-circuit">Full Body Circuit</Link></li>
          <li><Link to="/workout-plans/pilates-routine">Pilates</Link></li>
        </ul>
      <div className="p-6">
        <Outlet /> 
      </div>
    </div>
  );
};
export default ParentComponent;
