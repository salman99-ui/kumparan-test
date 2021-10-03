
import {Provider} from 'react-redux'
import Apps from './Route'
import Store from './Redux'
import './App.css';

function App() {
  return (
    <Provider store={Store}>
        <Apps />
    </Provider>
  )

}

export default App;
