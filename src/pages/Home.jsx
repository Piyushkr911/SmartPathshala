import React, { useEffect, useState } from "react";
import { getModules } from '../mock-data/module';

export default function Home() {
  const [modules, setModules] = useState([]);

  // Fetch data when component loads
  useEffect(() => {
    const fetchData = async () => {
      const data = await getModules();
      setModules(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-16 pb-10">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-600">EduLearn</h1>
        <p className="text-gray-600 mt-1 text-sm">
          Learn new skills anytime, anywhere
        </p>
      </header>

      <section className="px-4">
        <h2 className="text-lg font-semibold mb-4">Available Courses</h2>

        {modules.length === 0 ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((mod) => (
              <div
                key={mod.$id}
                className="bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center text-center border hover:shadow-md transition-all"
              >
                <img
                  src={mod.coverImage}
                  alt={mod.name}
                  className="w-20 h-20 object-contain mb-3"
                />
                <h3 className="font-semibold text-blue-700 text-base mb-2">
                  {mod.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {mod.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
