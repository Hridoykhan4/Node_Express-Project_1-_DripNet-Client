import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import Users from "./components/Users.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import ShowDetailCoffee from "./components/ShowDetailCoffee.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Orders from "./components/Orders.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import UpdateProfileName from "./components/UpdateProfileName.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
/* 
https://coffee-store-server-gamma-two.vercel.app
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/coffee`),
      },
      {
        path: "/addCoffee",
        element: (
          <ProtectedRoute>
            <AddCoffee></AddCoffee>
          </ProtectedRoute>
        ),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/showDetailCoffee/:id",
        element: <ShowDetailCoffee></ShowDetailCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute>
            <Orders></Orders>
          </ProtectedRoute>
        ),
        loader: () => fetch(`http://localhost:5000/orders`),
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute>
            <Users></Users>
          </ProtectedRoute>
        ),
        loader: () => fetch(`http://localhost:5000/users`),
      },
      {
        path: "/updateProfileName/:id",
        element: <UpdateProfileName></UpdateProfileName>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />{" "}
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
