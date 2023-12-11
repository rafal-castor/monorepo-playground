import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { sum } from "sdk";
import { ExampleForm } from "./components/ExampleForm";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Reused validation schema example:</p>
        <ExampleForm />
        <br />
        <p>Reused function example:</p>
        <p>Sum of 5 and 2 is {sum(5, 2)}</p>
      </div>
    </>
  );
}

export default App;
