import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">Coded by Sarah Cox</footer>
      </div>
    </div>
  );
}
