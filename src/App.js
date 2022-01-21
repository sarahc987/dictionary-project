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
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://github.com/sarahc987/dictionary-project"
            alt="Github Repository for Dictionary App"
          >
            Sarah Cox
          </a>
        </footer>
      </div>
    </div>
  );
}
