import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 min-h-[calc(100vh-362px)] mx-auto py-5">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
