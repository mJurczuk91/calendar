import './app.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import Datepicker from './features/datepicker';

function App() {
  return (
    <Provider store={store}>
      <Datepicker />
    </Provider>
  );
}

export default App;
