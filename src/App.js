import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by Yasmin Tercenio
          <a
            href="https://github.com/nimsay06/react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source code on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
