import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-3xl p-12 max-w-lg w-full text-center">
        
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          Oops! The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-foreground text-white font-medium transition duration-300 hover:bg-red-600 hover:-translate-y-1"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
