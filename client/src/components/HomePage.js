import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import { motion } from "framer-motion";
import { FaRunning, FaUsers, FaDumbbell } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold">Welcome to Social Fitness</h1>
        <p className="mt-4 text-lg">Connect, train, and achieve your fitness goals together!</p>
        <Button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl shadow-md">
          Get Started
        </Button>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard icon={<FaUsers />} title="Community Support" desc="Join a fitness-focused social network." />
        <FeatureCard icon={<FaRunning />} title="Track Workouts" desc="Monitor progress with workout logs." />
        <FeatureCard icon={<FaDumbbell />} title="Custom Challenges" desc="Compete and stay motivated." />
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold">What Our Users Say</h2>
        <p className="mt-4">"This app changed the way I work out! Love the community features." - Alex R.</p>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>&copy; 2025 Social Fitness. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <Card className="p-6 flex flex-col items-center text-center shadow-lg rounded-2xl">
      <motion.div className="text-4xl text-blue-500" whileHover={{ scale: 1.2 }}>
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </Card>
  );
}
