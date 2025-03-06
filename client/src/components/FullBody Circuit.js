import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PilatesRoutine = () => {
    const navigate = useNavigate();
  const exercises = [
    "Jumping Lunges",
    "Mountain Climbers",
    "High Knees",
    "Kettlebell Swings",
    "Push Press",
    "Box Jumps",
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
        Train like an athlete, eat like a nutritionist, sleep like a baby, and win like a champion
        </h2></center>
        <center>
        <img
          src="https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Full Body Circuit" width="350px" length="400px"
          className="rounded-lg mb-6 w-[400px] h-[250px] mx-auto"
        /></center>
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Jumping Lunges</h3>
              <p>Jumping lunges are a high-intensity plyometric exercise that strengthens the legs, glutes, and core while improving balance and coordination. This movement enhances cardiovascular endurance and explosiveness, making it ideal for athletes and fitness enthusiasts. It also helps improve agility, flexibility, and lower body power. Jumping lunges engage multiple muscle groups, promoting fat loss and overall fitness. Regular practice boosts stamina and enhances athletic performance.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://media.istockphoto.com/id/1302192063/photo/asian-woman-healthy-she-exercises-outdoors-she-does-leg-lunge-poses.jpg?s=2048x2048&w=is&k=20&c=hNVTq3OVYAR6JLO0hzyCkuI5P-YF6GKtQ5qSa33bAjM=" alt="Jumping Lunges"width="200px"length="300px" />
          </div>          
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Mountain Climbers</h3>
              <p>Mountain climbers are a dynamic full-body exercise that engages the core, shoulders, arms, and legs while improving cardiovascular endurance. This high-intensity movement helps burn calories, boost agility, and enhance coordination. It strengthens the core muscles, improving stability and posture. Mountain climbers also promote fat loss by increasing heart rate and metabolism. Regular practice enhances speed, endurance, and overall athletic performance.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/7899208/pexels-photo-7899208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mountain climbers" width="200px"length="300px" />
          </div>          
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">High Knees</h3>
              <p>High knees are a powerful cardio exercise that engages the core, legs, and glutes while improving heart health and endurance. This high-intensity movement increases agility, coordination, and lower body strength. It helps burn calories, enhances speed, and boosts metabolism, making it an effective fat-burning workout. High knees also improve balance and mobility, making them a great addition to any fitness routine.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/6339341/pexels-photo-6339341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="High knees"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Kettlebell Swings</h3>
              <p>Kettlebell swings are a dynamic full-body exercise that strengthens the core, glutes, hamstrings, and shoulders while improving cardiovascular endurance. This explosive movement enhances power, stability, and coordination, making it great for building functional strength. It also helps burn calories efficiently, making it an excellent fat-burning workout. Kettlebell swings improve posture and hip mobility while engaging multiple muscle groups simultaneously.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/3888411/pexels-photo-3888411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Kettlebell Swings"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Push Press</h3>
              <p>The push press is a powerful strength and conditioning exercise that targets the shoulders, triceps, and legs while improving overall power and explosiveness. It involves using a slight leg drive to press a weight overhead, making it more efficient than a strict press. This movement enhances shoulder stability, core strength, and coordination. The push press is commonly used in functional training and sports performance to develop upper-body strength and endurance.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/14591561/pexels-photo-14591561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Push Press"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Box Jumps</h3>
              <p>Box jumps are a high-intensity plyometric exercise that improves explosive power, leg strength, and cardiovascular endurance. They involve jumping onto a sturdy platform or box and landing softly to enhance agility and coordination. This exercise strengthens the lower body, including the quads, glutes, and calves, while also improving balance and reaction time. Box jumps are widely used in athletic training to boost speed, vertical leap, and overall performance.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Box Jumps"width="200px"length="300px"  />
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
