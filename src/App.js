import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from 'react-redux';
const Store = ConfigureStore()
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
      
      <MainComponent/>
     
    
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;