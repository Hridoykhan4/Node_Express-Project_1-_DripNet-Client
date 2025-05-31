import { Outlet } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
