import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const YogaRoutine = () => {
  const navigate = useNavigate();
  const exercises = [
    "Hatha",
    "Iyengar",
    "Vinyasa",
    "Bikram",
    "Ashtanga",
    "Kundalini",
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
        Yoga is the journey of the self, through the self, to the self
        </h2></center>
        <center>
        <img
          src="https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Yoga Routine" width="350px" length="400px"
          className="rounded-lg mb-6 w-[400px] h-[250px] mx-auto"
        /></center>
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Hatha</h3>
              <p>Hatha Yoga is a traditional form of yoga that focuses on physical postures (asanas), breathing techniques (pranayama), and meditation for overall balance and well-being. It emphasizes slow, controlled movements, making it great for beginners. Hatha yoga improves flexibility, strength, and relaxation while promoting mindfulness. Sessions typically include gentle poses, deep breathing, and relaxation techniques.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://cdn.shopify.com/s/files/1/0077/7587/9266/files/lotuscrafts-hatha-yoga-uebungen_1024x1024.jpg?v=1576668676" alt="Hatha"width="200px"length="300px" />
          </div>          
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Iyengar</h3>
              <p>Iyengar Yoga is a form of yoga that focuses on precise alignment, posture, and breath control. It uses props like blocks, straps, and bolsters to help achieve proper form and hold poses longer. This style builds strength, flexibility, and balance while reducing the risk of injury. Iyengar yoga is great for all levels, including beginners and those with physical limitations.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwytEprFQcQCHJHeoNhm_ZOU8v9mAxVymkQ&s" alt="Iyengar" width="200px"length="300px" />
          </div>          
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Vinyasa</h3>
              <p>Vinyasa Yoga is a dynamic style that links breath with movement in a flowing sequence. Poses transition smoothly, creating a rhythmic and energetic practice. It improves strength, flexibility, and endurance while promoting mindfulness. Common sequences include Sun Salutations, with variations for all levels. Vinyasa is great for those who enjoy a faster-paced, creative yoga practice.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://i.ytimg.com/vi/Iw487K9C5oA/sddefault.jpg" alt="Vinyasa"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Bikram</h3>
              <p>Bikram Yoga is a structured style of hot yoga consisting of 26 poses and 2 breathing exercises, performed in a room heated to 105°F (40°C) with 40% humidity. The heat helps improve flexibility, detoxify the body through sweating, and enhance cardiovascular endurance. Each session lasts 90 minutes, following the same sequence every time. It builds strength, balance, and mental focus.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://www.yogateket.com/image/original/standinheadtoknee.jpg" alt="Bikram"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">Ashtanga</h3>
              <p>Ashtanga Yoga is a dynamic and physically demanding style that follows a set sequence of postures, linked by breath and movement (vinyasa). It consists of six progressive series, starting with the Primary Series and advancing to more challenging levels. Ashtanga builds strength, flexibility, endurance, and mental focus. It is often practiced in a Mysore style, where students move at their own pace with teacher guidance.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.ctfassets.net/1tp0n7niw68j/7mrvPZkg3O7WQAHwgglulG/e76e702812fe95b742be6ff496fddda9/18.jpg" alt="Ashtanga"width="200px"length="300px"  />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            <div className="md:w-1/2 text-right">
              <h3 className="text-xl font-bold">Kundalini</h3>
              <p>Kundalini Yoga is a spiritual and energetic practice that combines breathwork (pranayama), dynamic movements (kriyas), chanting (mantras), and meditation to awaken inner energy. It focuses on activating the kundalini energy at the base of the spine to enhance awareness and consciousness. This practice strengthens the nervous system, reduces stress, and promotes mental clarity and emotional balance.</p>
            </div>
            <img className="md:w-1/2 rounded-lg" src="https://images.shiksha.com/mediadata/images/articles/1721816230php2DyrUP.jpeg" alt="Kundalini"width="200px"length="300px"  />
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
export default YogaRoutine;
