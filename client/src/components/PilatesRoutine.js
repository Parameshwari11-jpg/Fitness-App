import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PilatesRoutine = () => {
  const navigate = useNavigate();
  const exercises = [
    "Hundred",
    "Single-Leg Stretch",
    "Double-Leg Stretch",
    "Criss-Cross",
    "Teaser",
    "Plank with Leg Lift",
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
        <center>
        <h2 className="text-2xl font-semibold mb-6">
        Pilates is complete coordination of body, mind, and spirit
        </h2></center>
        <center>
        <img
          src="https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Pilates Routine" width="350px" length="400px"
          className="rounded-lg mb-6 w-[400px] h-[250px] mx-auto"
        /></center>
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Hundred</h3>
              <p>The Hundred is a classic Pilates exercise that strengthens the core and improves circulation. Lie on your back, lift your head and shoulders, extend your legs, and pump your arms while breathing in for five counts and out for five. Repeat until you reach 100 counts. Keep your lower back pressed into the mat and engage your core. Modify by bending your knees or lowering your head if needed.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/14843543/pexels-photo-14843543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hundred"width="200px"length="300px" />
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">SingleLeg Strectch</h3>
              <p>The Single Leg Stretch is a Pilates exercise that strengthens the core and improves coordination. Lie on your back, lift your head and shoulders, bring one knee to your chest, and extend the other leg at a 45-degree angle. Switch legs in a scissor-like motion while engaging your core. Inhale as you switch one leg, exhale as you switch the other. Keep your lower back stable and avoid neck strain.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/864989/pexels-photo-864989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="SingleLeg strectch" width="200px"length="300px" />
          </div>         
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">DoubleLeg Strectch</h3>
              <p>The Double Leg Stretch is a Pilates exercise that strengthens the core and improves flexibility. Lie on your back, lift your head and shoulders, bring both knees to your chest, and extend your arms overhead while stretching your legs forward. Circle your arms back to hug your knees and repeat. Inhale as you stretch, exhale as you return. Keep your core engaged and lower back stable.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="DoubleLeg Strectch"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">CrissCross</h3>
              <p>The Crisscross is a Pilates exercise that targets the obliques and strengthens the core. Lie on your back, lift your head and shoulders, and bring one knee to your chest while extending the other leg. Twist your torso so your opposite elbow reaches toward the bent knee. Switch sides in a bicycle motion, exhaling as you twist. Keep your core engaged and move with control.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/14461275/pexels-photo-14461275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Criss Cross"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Teaser</h3>
              <p>The Teaser is a Pilates exercise that strengthens the core and improves balance. Start by lying on your back with legs extended at a 45-degree angle. Lift your upper body and reach your arms forward to form a V-shape. Hold briefly, then slowly lower back down with control. Inhale as you lift, exhale as you lower. Keep your core engaged and move smoothly.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/14843494/pexels-photo-14843494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Teaser"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Plank with Leg lift</h3>
              <p>The Plank with Leg Lift is a core-strengthening exercise that also targets the glutes and balance. Start in a forearm or high plank position, keeping your body in a straight line. Lift one leg off the ground, hold briefly, then lower it back down. Switch legs and repeat. Engage your core, keep your hips stable, and avoid arching your back. Breathe steadily throughout the movement.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/3756521/pexels-photo-3756521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Plank with leg lift"width="200px"length="300px"  />
          </div>
        </div><br/>
        <div className="w-full max-w-md space-y-3">
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
      </div><br/>
      <button
  onClick={() => navigate("/workout-plans")}
  className="absolute top-6 right-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition"
>
  Back
</button>
    </div>
  );
};
export default PilatesRoutine;
