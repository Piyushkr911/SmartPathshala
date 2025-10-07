// App.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold text-blue-600">EduLearn</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-lg">
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-10 text-center px-4">
        <h2 className="text-2xl font-bold mb-3">Learn Anytime, Anywhere</h2>
        <p className="text-gray-600 mb-4">
          Access quality courses and improve your skills with EduLearn.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-lg">
          Get Started
        </Button>
      </section>

      {/* Courses Section */}
      <section className="px-4 mb-10">
        <h3 className="text-lg font-semibold mb-3">Popular Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Web Development", "Data Science", "Digital Marketing"].map((course, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">{course}</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Learn {course} from top instructors.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 mb-10 text-center">
        <h3 className="text-lg font-semibold mb-3">About EduLearn</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          EduLearn is an online education platform designed to help students learn new skills with ease. We offer flexible, affordable, and certified courses.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white py-4 border-t text-center text-sm text-gray-500">
        © 2025 EduLearn. All rights reserved.
      </footer>
    </div>
  );
}
