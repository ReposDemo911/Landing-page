
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Landing Page</h1>
        <p className="text-gray-700">
          This is the landing page of our Next.js app.
        </p>
        <Link href="/SecondPage">
          <button className="text-blue-500 hover:underline mt-4 block">Go to Second Page</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
