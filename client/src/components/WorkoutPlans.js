import React from "react";
import { useNavigate } from "react-router-dom";
const WorkoutPlans = () => {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem("userToken"); 
    sessionStorage.clear(); 
    navigate("/login"); 
  };
  return (
    <center>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
          <h1 className="text-3xl font-bold mb-4">Social Fitness App</h1>
          <h2 className="text-2xl font-semibold mb-6">Workout Plans</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md block">
              <h3 className="text-xl font-semibold mb-2">Cardio Workout</h3>
              <img
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cardio Workout"
                width="350px"
                height="250px"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-gray-600">
                Your heart is the strongest muscle—train it well.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Strength Training</h3>
              <img
                src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Strength Training"
                width="350px"
                height="250px"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-gray-600">
                Strength doesn’t come from what you can do, it comes from overcoming the things you once thought you couldn’t.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Yoga Routine</h3>
              <img
                src="https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Yoga"
                width="350px"
                height="250px"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-gray-600">
                Yoga is the journey of the self, through the self, to the self.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Full Body Circuit</h3>
              <img
                src="https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Full Body Circuit"
                width="350px"
                height="250px"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-gray-600">
                Train like an athlete, eat like a nutritionist, sleep like a baby, and win like a champion.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Pilates Routine</h3>
              <img
                src="https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pilates Routine"
                width="350px"
                height="250px"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-gray-600">
                Pilates is complete coordination of body, mind, and spirit.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </center>
  );
};
export default WorkoutPlans;
