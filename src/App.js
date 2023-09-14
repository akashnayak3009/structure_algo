import './App.css';
import Timer from './projects/Timer/Timer';
// import Weather from './projects/Weather_App/Weather';
// import { WeatherProvider } from './projects/Weather_App/context/WeatherContext';
// import TicToe from './projects/TicTacToe/TicToe';

function App() {
  return (
    <div className="App">
      {/* <TicToe /> */}
      {/* <WeatherProvider>
        <Weather />
      </WeatherProvider> */}
      <Timer/>
    </div>
  );
}

export default App;
