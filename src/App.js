import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
        </header>
        <Dictionary />
        <footer className="App-footer">Coded by Sarah Cox</footer>
      </div>
    </div>
  );
}
