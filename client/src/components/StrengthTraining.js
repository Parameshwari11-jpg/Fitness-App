import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const StrengthTraining = () => {
  const navigate = useNavigate();
  const exercises = [
    "Squats",
    "Push-ups",
    "Pull-ups",
    "Deadlifts",
    "Bench Press",
    "Dumbbell Rows",
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
        Strength doesn’t come from what you can do, it comes from overcoming the things you once thought you couldn’t
        </h2></center>
        <center>
        <img
          src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Strength Training" width="350px" length="400px"
          className="rounded-lg mb-6 w-[400px] h-[250px] mx-auto"
        /></center>
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Squats</h3>
              <p>Squats are a strength-training exercise that targets the legs, glutes, and core. Stand with feet shoulder-width apart, lower your hips back and down as if sitting in a chair, keeping your chest up and knees behind your toes. Push through your heels to return to standing. Engage your core and keep your back straight. Variations include jump squats, sumo squats, and goblet squats for added challenge.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Squats"width="200px"length="300px" />
          </div>         
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Pushups</h3>
              <p>Push-ups are a full-body exercise that strengthens the chest, shoulders, arms, and core. Start in a high plank position with hands shoulder-width apart. Lower your body by bending your elbows until your chest nearly touches the floor, then push back up. Keep your body in a straight line and engage your core. Modify by dropping to your knees or doing incline push-ups for easier variations.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pushups" width="200px"length="300px" />
          </div>          
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Pullups</h3>
              <p>Pull-ups are an upper-body exercise that strengthens the back, shoulders, and arms. Grip a pull-up bar with palms facing away, hands shoulder-width apart. Pull your body up until your chin clears the bar, then lower yourself with control. Engage your core and avoid swinging. Modify by using resistance bands or an assisted pull-up machine if needed.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://media.istockphoto.com/id/480174782/photo/pull-ups.jpg?s=2048x2048&w=is&k=20&c=OIYzqooFFXFHfeGa0GljZVsYbbz-m91BDjp0_8gOhD4=" alt="Pullups"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Deadlifts</h3>
              <p>Deadlifts are a strength exercise that targets the lower back, glutes, hamstrings, and core. Stand with feet hip-width apart, grip a barbell or dumbbells, and hinge at the hips to lower the weight while keeping your back straight. Push through your heels to return to standing, engaging your core and glutes. Keep the bar close to your body and avoid rounding your back. Variations include Romanian and sumo deadlifts.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Deadlifts"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Bench Press</h3>
              <p>The Bench Press is a strength exercise that targets the chest, shoulders, and triceps. Lie on a bench with feet flat on the floor, grip the barbell slightly wider than shoulder-width, and lower it to your chest. Press the bar back up until your arms are fully extended. Keep your core engaged and avoid arching your back. Variations include incline, decline, and dumbbell bench press.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Bench Press"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Dumbbell rows</h3>
              <p>Dumbbell Rows are a strength exercise that targets the back, shoulders, and arms. Hold a dumbbell in one hand, hinge at the hips, and place the other hand on a bench for support. Pull the dumbbell toward your torso, keeping your elbow close to your body, then lower it with control. Keep your back straight and core engaged. Variations include single-arm, bent-over, and renegade rows.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://media.istockphoto.com/id/1227049739/photo/side-view-of-young-adult-caucasian-man-male-athlete-bodybuilder-with-beard-holding-dumbbells.jpg?s=2048x2048&w=is&k=20&c=Ho4u-mp56aw0ZeCI7lhGvA8zlO7WwoJ8dOZ4WuYBnx8=" alt="Dumbbell rows"width="200px"length="300px"  />
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
export default StrengthTraining;
