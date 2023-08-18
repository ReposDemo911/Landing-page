
import Link from 'next/link';
import React from 'react';


const MainPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Second Page</h1>
        <p className="text-gray-700">
          This is the second page of our landing page built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <Link href="/SecondPage">
          <button className="bg-blue-400 text-white p-2 rounded-sm hover:bg-blue-500 mt-4 block">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
