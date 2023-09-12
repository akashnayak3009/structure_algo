import './App.css';
import Weather from './projects/Weather_App/Weather';
import { WeatherProvider } from './projects/Weather_App/context/WeatherContext';
// import TicToe from './projects/TicTacToe/TicToe';

function App() {
  return (
    <div className="App">
      {/* <TicToe /> */}
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
