import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CardioWorkouts = () => {
  const navigate = useNavigate();
  const exercises = [
    "Running",
    "Jump Rope",
    "Cycling",
    "Burpees",
    "Rowing",
    "Jump Squats",
  ];
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [timer, setTimer] = useState(0);
  const handleCheckboxChange = (exercise) => {
    if (selectedExercise === exercise) {
      setSelectedExercise(null);  
      setTimer(0);
    } else {
      setSelectedExercise(exercise); 
      setTimer(0);
    }
  };
  useEffect(() => {
    let interval;
    if (selectedExercise) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [selectedExercise]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 relative">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
        <center>
          <h2 className="text-2xl font-semibold mb-6">
            Your heart is the strongest muscle—train it well
          </h2>
          <img
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Cardio Workout" width="350px" length="400px"
            className="rounded-lg mb-6 w-[400px] h-[250px] mx-auto"
          />
        </center>
        <div className="space-y-10">
       
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Jump Rope</h3>
              <p>Jump Rope is a high-intensity cardio exercise that improves heart health, coordination, and endurance. It helps burn calories quickly, making it an effective workout for weight loss and fat burning.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/8035112/pexels-photo-8035112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Jump Rope" width="200px"length="300px" />
          </div>         
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Cycling</h3>
              <p>Cycling is a low-impact cardiovascular exercise that strengthens the heart, lungs, and muscles while improving endurance. It helps burn calories, promotes weight loss, and enhances overall fitness.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cycling"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Burpees</h3>
              <p>Burpees are a full-body exercise that combines strength and cardio, improving endurance, agility, and muscle tone. They engage multiple muscle groups and boost heart rate.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/4720537/pexels-photo-4720537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Burpees"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Rowing</h3>
              <p>Rowing is a full-body workout that engages the legs, core, and upper body, improving strength and endurance. It provides an excellent cardiovascular workout while being low-impact.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/3693080/pexels-photo-3693080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Rowing"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Jump Squats</h3>
              <p>Jump Squats are a high-intensity exercise that strengthens the legs, glutes, and core while improving explosive power. They enhance cardiovascular endurance and athletic performance.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://media.istockphoto.com/id/692883044/photo/beautiful-woman-doing-box-squats-at-the-gym.jpg?s=1024x1024&w=is&k=20&c=NhYp7XDZE_6ml1ELN8Yf1oMmzJfiDm-X2vQPGON1MP8=" alt="Jump Squats"width="200px"length="300px"  />
          </div>
        </div><br/>
        <div className="w-full max-w-md space-y-3 mt-10">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center p-3 border rounded-lg bg-gray-100 hover:bg-green-300 cursor-pointer transition"
            >
              <input
                type="checkbox"
                className="w-5 h-5 justify-self-start"
                checked={selectedExercise===exercise}
                onChange={() => handleCheckboxChange(exercise)}
              />
              <span className="text-lg font-medium text-center">{exercise}</span>
              <span className="text-lg font-semibold justify-self-end">
                {selectedExercise===exercise?timer: 0} sec
              </span>
            </div>
          ))}
        </div>
      </div>
      <br />
      <button
        onClick={() => navigate("/workout-plans")}
        className="absolute top-6 right-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Back
      </button>
    </div>
  );
};
export default CardioWorkouts;