import './App.css';
import { Header } from './components/Header/Header'; // Importando o Header
import { WeatherCard } from './components/WeatherCard/WeatherCard';



 function App() {
 
    return (
        <div className="App">
            <Header />
              <WeatherCard />
        </div>
    );
}

 
export default App