import { Link } from "react-router-dom";
import errorImage from "../assets/404.gif";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 text-center">
      <img
        src={errorImage}
        alt="Page Not Found"
        className="w-full rounded-full max-w-md mb-8"
      />
      <h1 className="text-6xl font-bold text-error">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-base-content">
        The page you're looking for doesn’t exist or might have been moved.
      </p>
      <Link to="/" className="btn btn-primary mt-6">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
