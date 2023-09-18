import './App.css';
import Pagination from './projects/Pagination/Pagination';
import ProgressBar from './projects/ProgreesBar/ProgressBar';
// import Timer from './projects/Timer/Timer';
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
      {/* <Timer/> */}
      {/* <Pagination/> */}
      <ProgressBar/>
    </div>
  );
}

export default App;
